import { useState } from 'react';
import { Calculator, DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(12);
  const [loanType, setLoanType] = useState<string>('personal');

  const loanTypeRates: { [key: string]: { min: number; max: number } } = {
    personal: { min: 5.5, max: 8.5 },
    housing: { min: 4.5, max: 6.5 },
    business: { min: 6.0, max: 9.0 },
    education: { min: 4.0, max: 6.0 },
    vehicle: { min: 5.0, max: 7.5 },
    emergency: { min: 6.5, max: 9.5 },
  };

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
    
    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }
    
    const payment = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return payment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  const generateAmortizationSchedule = () => {
    const schedule = [];
    let balance = loanAmount;
    const monthlyRate = interestRate / 100 / 12;

    for (let month = 1; month <= Math.min(loanTerm, 12); month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }

    return schedule;
  };

  const schedule = generateAmortizationSchedule();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Financial Planning Tool</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Loan Calculator</h1>
            <p className="text-lg text-blue-100">
              Estimate your monthly loan payments and plan your finances with our easy-to-use calculator.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="loanType">Loan Type</Label>
                  <Select value={loanType} onValueChange={(value) => {
                    setLoanType(value);
                    const rates = loanTypeRates[value];
                    setInterestRate((rates.min + rates.max) / 2);
                  }}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
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
                    Rate range: {loanTypeRates[loanType].min}% - {loanTypeRates[loanType].max}%
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="pl-9 rounded-lg"
                      min="1000"
                      step="1000"
                    />
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
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
                      min="0"
                      max="20"
                      step="0.1"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
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
                      min="6"
                      max="300"
                    />
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="300"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    {(loanTerm / 12).toFixed(1)} years
                  </p>
                </div>

                <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5" />
                      <p className="text-sm opacity-90">Monthly Payment</p>
                    </div>
                    <p className="text-3xl font-bold">${monthlyPayment.toFixed(2)}</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white border-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <p className="text-sm opacity-90">Total Interest</p>
                    </div>
                    <p className="text-3xl font-bold">${totalInterest.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Summary */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold">{interestRate}% p.a.</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Loan Term</span>
                    <span className="font-semibold">{loanTerm} months</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Monthly Payment</span>
                    <span className="font-semibold text-primary">${monthlyPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="font-semibold">${totalInterest.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Total Payment</span>
                    <span className="font-semibold text-lg">${totalPayment.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Amortization Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Amortization Schedule (First Year)</h2>
          <Card className="rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Month</th>
                    <th className="text-right p-4 font-semibold">Payment</th>
                    <th className="text-right p-4 font-semibold">Principal</th>
                    <th className="text-right p-4 font-semibold">Interest</th>
                    <th className="text-right p-4 font-semibold">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-muted/50">
                      <td className="p-4">{row.month}</td>
                      <td className="text-right p-4">${row.payment.toFixed(2)}</td>
                      <td className="text-right p-4 text-green-600">${row.principal.toFixed(2)}</td>
                      <td className="text-right p-4 text-orange-600">${row.interest.toFixed(2)}</td>
                      <td className="text-right p-4 font-medium">${row.balance.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          {loanTerm > 12 && (
            <p className="text-sm text-muted-foreground text-center mt-4">
              Showing first 12 months of {loanTerm}-month loan term
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
