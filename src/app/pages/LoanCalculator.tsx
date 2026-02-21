import { useState, useEffect } from 'react';
import { Calculator, Calendar, Percent, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

const formatPeso = (amount: number) =>
  '₱' + amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(12);
  const [loanType, setLoanType] = useState<string>('personal');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const loanTypeRates: { [key: string]: { min: number; max: number } } = {
    personal:  { min: 5.5, max: 8.5 },
    housing:   { min: 4.5, max: 6.5 },
    business:  { min: 6.0, max: 9.0 },
    education: { min: 4.0, max: 6.0 },
    vehicle:   { min: 5.0, max: 7.5 },
    emergency: { min: 6.5, max: 9.5 },
  };

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    if (monthlyRate === 0) return loanAmount / loanTerm;
    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1)
    );
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment   = monthlyPayment * loanTerm;
  const totalInterest  = totalPayment - loanAmount;

  const generateAmortizationSchedule = () => {
    const schedule = [];
    let balance = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    for (let month = 1; month <= Math.min(loanTerm, 12); month++) {
      const interestPayment   = balance * monthlyRate;
      const principalPayment  = monthlyPayment - interestPayment;
      balance -= principalPayment;
      schedule.push({ month, payment: monthlyPayment, principal: principalPayment, interest: interestPayment, balance: Math.max(0, balance) });
    }
    return schedule;
  };

  const schedule = generateAmortizationSchedule();

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative text-white py-24 sm:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center"
          style={{ transition: 'transform 20s linear', transform: heroVisible ? 'scale(1)' : 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/60 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Financial Planning Tool</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Loan Calculator</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Estimate your monthly loan payments in Philippine Peso and plan your finances with our easy-to-use calculator.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-background/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Input Form */}
            <Card className="rounded-2xl bg-card/90 backdrop-blur-sm border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">

                <div className="space-y-2">
                  <Label>Loan Type</Label>
                  <Select value={loanType} onValueChange={(value) => {
                    setLoanType(value);
                    const rates = loanTypeRates[value];
                    setInterestRate(parseFloat(((rates.min + rates.max) / 2).toFixed(1)));
                  }}>
                    <SelectTrigger className="rounded-lg"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="housing">Housing Loan</SelectItem>
                      <SelectItem value="business">Business Loan</SelectItem>
                      <SelectItem value="education">Education Loan</SelectItem>
                      <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                      <SelectItem value="emergency">Emergency Loan</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Rate range: {loanTypeRates[loanType].min}% – {loanTypeRates[loanType].max}%
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanAmount">Loan Amount (₱)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-sm">₱</span>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="pl-8 rounded-lg"
                      min="5000"
                      step="5000"
                    />
                  </div>
                  <input type="range" min="5000" max="5000000" step="5000" value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-primary" />
                  <p className="text-xs text-muted-foreground">{formatPeso(loanAmount)}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="interestRate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="pl-9 rounded-lg"
                      min="0" max="20" step="0.1"
                    />
                  </div>
                  <input type="range" min="0" max="20" step="0.1" value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanTerm">Loan Term (months)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="pl-9 rounded-lg"
                      min="6" max="300"
                    />
                  </div>
                  <input type="range" min="6" max="300" value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full accent-primary" />
                  <p className="text-xs text-muted-foreground">{(loanTerm / 12).toFixed(1)} years</p>
                </div>

                <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary font-semibold">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold opacity-90">₱</span>
                      <p className="text-sm opacity-90">Monthly Payment</p>
                    </div>
                    <p className="text-3xl font-bold">{formatPeso(monthlyPayment)}</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <p className="text-sm opacity-90">Total Interest</p>
                    </div>
                    <p className="text-3xl font-bold">{formatPeso(totalInterest)}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="rounded-2xl bg-card/90 backdrop-blur-sm border-border/50 shadow-sm">
                <CardHeader><CardTitle>Payment Summary</CardTitle></CardHeader>
                <CardContent className="space-y-0">
                  {[
                    { label: 'Loan Amount',     value: formatPeso(loanAmount),     highlight: false },
                    { label: 'Interest Rate',   value: `${interestRate}% p.a.`,     highlight: false },
                    { label: 'Loan Term',       value: `${loanTerm} months`,        highlight: false },
                    { label: 'Monthly Payment', value: formatPeso(monthlyPayment),  highlight: true  },
                    { label: 'Total Interest',  value: formatPeso(totalInterest),   highlight: false },
                    { label: 'Total Payment',   value: formatPeso(totalPayment),    highlight: false },
                  ].map((row, i, arr) => (
                    <div key={i} className={`flex justify-between py-3 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className={`font-semibold ${row.highlight ? 'text-primary' : ''} ${i === arr.length - 1 ? 'text-lg' : ''}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Amortization Schedule ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">Amortization Schedule (First Year)</h2>
          <Card className="rounded-2xl overflow-hidden bg-white/10 border-white/20 backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="text-left p-4 font-semibold text-white">Month</th>
                    <th className="text-right p-4 font-semibold text-white">Payment</th>
                    <th className="text-right p-4 font-semibold text-white">Principal</th>
                    <th className="text-right p-4 font-semibold text-white">Interest</th>
                    <th className="text-right p-4 font-semibold text-white">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-white/10 transition-colors">
                      <td className="p-4 text-white/90">{row.month}</td>
                      <td className="text-right p-4 text-white/90">{formatPeso(row.payment)}</td>
                      <td className="text-right p-4 text-green-400 font-medium">{formatPeso(row.principal)}</td>
                      <td className="text-right p-4 text-orange-400 font-medium">{formatPeso(row.interest)}</td>
                      <td className="text-right p-4 text-white font-semibold">{formatPeso(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          {loanTerm > 12 && (
            <p className="text-sm text-white/60 text-center mt-4">
              Showing first 12 months of {loanTerm}-month loan term
            </p>
          )}
        </div>
      </section>

    </div>
  );
}