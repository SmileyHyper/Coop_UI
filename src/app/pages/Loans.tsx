import { Link } from 'react-router';
import { CreditCard, Home, Briefcase, GraduationCap, Car, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useEffect, useState } from 'react';

export function Loans() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const loanTypes = [
    {
      icon: CreditCard,
      title: 'Personal Loan',
      description: 'Flexible personal loans for any purpose – from medical expenses to special occasions.',
      features: ['Up to ₱50,000', 'Low interest rates', 'Flexible terms up to 5 years', 'Quick approval'],
      rate: '5.5% - 8.5%',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      title: 'Housing Loan',
      description: 'Make your dream home a reality with our competitive housing loan packages.',
      features: ['Up to ₱500,000', 'Long-term financing up to 25 years', 'Competitive rates', 'No prepayment penalties'],
      rate: '4.5% - 6.5%',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Business Loan',
      description: 'Grow your business with capital designed for entrepreneurs and enterprises.',
      features: ['Up to ₱200,000', 'Business expansion support', 'Flexible repayment', 'Competitive rates'],
      rate: '6.0% - 9.0%',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Education Loan',
      description: 'Invest in your future with educational loans for college and professional studies.',
      features: ['Up to ₱100,000', 'Deferred payment options', 'Low interest rates', 'Grace period available'],
      rate: '4.0% - 6.0%',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Car,
      title: 'Vehicle Loan',
      description: 'Get behind the wheel with our auto financing for new and used vehicles.',
      features: ['Up to ₱75,000', 'New & used vehicles', 'Competitive rates', 'Fast approval process'],
      rate: '5.0% - 7.5%',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Emergency Loan',
      description: 'Quick access to funds when you need them most for unexpected expenses.',
      features: ['Up to ₱10,000', 'Same-day approval', 'Minimal requirements', 'Short-term options'],
      rate: '6.5% - 9.5%',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ── */}
      <section className="relative text-white py-24 sm:py-36 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center"
          style={{
            transition: 'transform 20s linear',
            transform: heroVisible ? 'scale(1)' : 'scale(1.05)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/60 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Financial Solutions</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Loan Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Flexible financing solutions tailored to your needs. From personal loans to business expansion,
              we have the right loan product for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Loan Types Grid ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Subtle faded background */}
        <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-background/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${loan.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <loan.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="flex items-start justify-between">
                    <span>{loan.title}</span>
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">{loan.rate} APR</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{loan.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Features:</p>
                    <ul className="space-y-1">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements Section ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background image with stronger overlay */}
        <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">General Loan Requirements</h2>
            <Card className="rounded-2xl bg-white/10 border-white/20 backdrop-blur-md text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">For All Members</h3>
                    <ul className="space-y-3 text-sm text-white/80">
                      {[
                        'Active membership for at least 6 months',
                        'Valid government-issued ID',
                        'Proof of income (payslip, ITR, etc.)',
                        'Good credit standing',
                        'Completed loan application form',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Additional Documents</h3>
                    <ul className="space-y-3 text-sm text-white/80">
                      {[
                        'Latest bank statements (3 months)',
                        'Proof of billing address',
                        'Co-maker information (if required)',
                        'Collateral documents (for secured loans)',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Subtle faded background */}
        <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-background/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 sm:p-16 text-center relative">
              <div className="absolute inset-0 bg-[url('/src/images/bghd.jpg')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Use our loan calculator to estimate your monthly payments or contact us to discuss your loan needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-xl rounded-xl font-bold">
                    <Link to="/calculator">
                      Calculate Loan
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}