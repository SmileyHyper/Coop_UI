import { Link } from 'react-router';
import { Users, CheckCircle, ArrowRight, Shield, Heart, TrendingUp, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function MembershipInfo() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Rates',
      description: 'Access to loans with lower interest rates and savings with higher returns.'
    },
    {
      icon: Shield,
      title: 'Financial Security',
      description: 'Your deposits are insured and your financial well-being is our priority.'
    },
    {
      icon: Gift,
      title: 'Member Dividends',
      description: 'Share in the cooperative\'s success through annual dividend distributions.'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Be part of a community that supports local development and prosperity.'
    }
  ];

  const membershipTypes = [
    {
      title: 'Regular Member',
      description: 'Full membership with voting rights and access to all products and services.',
      requirements: [
        'Must be at least 18 years old',
        'Philippine citizen or resident',
        'Good moral character',
        'Completed orientation seminar'
      ],
      shareCapital: '$500 minimum',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Associate Member',
      description: 'Limited membership for those who cannot meet regular membership requirements.',
      requirements: [
        'Employees of member organizations',
        'Immediate family of regular members',
        'Students (16-18 years old)',
        'Completed orientation seminar'
      ],
      shareCapital: '$250 minimum',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Join Our Community</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Membership Information</h1>
            <p className="text-lg text-blue-100 mb-8">
              Become part of a thriving community cooperative dedicated to your financial success. 
              Experience the benefits of member-owned banking.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-xl rounded-xl">
              <Link to="/membership/apply">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Member Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy exclusive advantages designed for our valued members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Membership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the membership type that best fits your situation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {membershipTypes.map((type, index) => (
              <Card key={index} className="border-border/50 rounded-2xl">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">{type.shareCapital}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Requirements:</p>
                    <ul className="space-y-2">
                      {type.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {req}
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

      {/* Rights and Privileges */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Member Rights & Privileges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>As a Regular Member, you can:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Vote in annual general assemblies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Run for board positions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Access all loan products
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Open all types of savings accounts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Receive annual dividends
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Attend member education seminars
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Participate in all cooperative programs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>As an Associate Member, you can:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Access selected loan products
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Open savings accounts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Attend member seminars
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Upgrade to regular membership
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Receive patronage refunds
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Participate in cooperative events
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-none shadow-2xl rounded-3xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Learn more about the membership process or start your application today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-xl rounded-xl">
                  <Link to="/membership/apply">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl">
                  <Link to="/membership/steps">View Process</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
