import { Target, Eye, Users, TrendingUp, Award, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function About() {
  const values = [
    { icon: Target, title: 'Integrity', description: 'We uphold the highest standards of honesty and transparency' },
    { icon: Users, title: 'Community', description: 'We strengthen our community through mutual support' },
    { icon: TrendingUp, title: 'Growth', description: 'We foster financial growth for all our members' },
    { icon: Award, title: 'Excellence', description: 'We deliver exceptional service and value' },
  ];

  const board = [
    { name: 'John Smith', position: 'Chairman', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Maria Garcia', position: 'Vice Chairman', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Robert Johnson', position: 'Treasurer', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Lisa Chen', position: 'Secretary', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Story</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Building a stronger community through cooperative banking since 2001
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading community cooperative, empowering members through innovative financial solutions 
                  and fostering sustainable economic development for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide accessible, member-focused financial services that promote economic well-being, 
                  strengthen community bonds, and create lasting value through cooperative principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <Card className="rounded-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2001
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Foundation</h3>
                  <p className="text-sm text-muted-foreground">
                    Community Cooperative was founded by 50 visionary members who believed in the power of cooperation 
                    to transform lives and strengthen communities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2010
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Growth & Expansion</h3>
                  <p className="text-sm text-muted-foreground">
                    Reached 5,000 members and opened our second branch, expanding our services to serve more communities 
                    and offering new financial products.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2020
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Digital Transformation</h3>
                  <p className="text-sm text-muted-foreground">
                    Launched digital banking services and mobile app, making it easier than ever for members to 
                    access their accounts and manage their finances.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2026
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Proudly serving over 10,000 members with $50M+ in assets, continuing our mission to empower our 
                    community through cooperative banking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="rounded-2xl border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg mx-auto">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((member, index) => (
              <Card key={index} className="rounded-2xl border-border/50 overflow-hidden">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
