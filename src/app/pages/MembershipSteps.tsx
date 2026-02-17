import { Link } from 'react-router';
import { CheckCircle, ArrowRight, FileText, Users, CreditCard, UserCheck } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function MembershipSteps() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Attend Orientation',
      description: 'Join our free membership orientation seminar to learn about cooperative principles and member benefits.',
      details: ['Available online and in-person', 'Every Saturday at 10 AM', 'Duration: 2 hours', 'Certificate provided']
    },
    {
      number: '02',
      icon: Users,
      title: 'Prepare Documents',
      description: 'Gather all required documents for your membership application.',
      details: ['Valid government ID (2 copies)', 'Proof of address', '2x2 ID photos (2 pcs)', 'Birth certificate (optional)']
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Pay Initial Contribution',
      description: 'Make your initial share capital contribution and membership fee.',
      details: ['Share capital: $500 (Regular) / $250 (Associate)', 'Membership fee: $25', 'Payment via cash, check, or bank transfer', 'Receipt will be issued']
    },
    {
      number: '04',
      icon: UserCheck,
      title: 'Submit & Get Approved',
      description: 'Submit your complete application and await approval from the board.',
      details: ['Processing time: 5-7 business days', 'Email/SMS notification upon approval', 'Receive member ID and passbook', 'Start enjoying benefits immediately']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Simple Process</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">How to Become a Member</h1>
            <p className="text-lg text-blue-100">
              Join our cooperative in 4 simple steps. Start your journey to financial empowerment today.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-border/50 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl font-bold text-muted/20">{step.number}</div>
                        <div className="absolute top-0 left-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Checklist</h2>
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Required Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Accomplished application form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Orientation certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Valid government ID (2 photocopies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">2x2 ID photos (2 pieces)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Proof of billing address</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Payment Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Share capital contribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Membership fee ($25)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">Initial deposit (optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-none shadow-2xl rounded-3xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your membership application now and join our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-xl rounded-xl">
                  <Link to="/membership/apply">
                    Start Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
