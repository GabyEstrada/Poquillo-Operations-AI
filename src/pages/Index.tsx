
import { ArrowRight, Flame, TrendingUp, Dizzy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-lg z-50">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Poquillo
          </div>
          <Button 
            onClick={() => scrollToSection('apply')}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            Let's Talk Goals
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-24 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Scale Without the Chaos
          </h1>
          <div className="text-xl md:text-2xl mb-4 opacity-90 font-medium">
            We help overwhelmed business owners fix what's not working behind the scenes
          </div>
          <div className="text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
            Transform operational chaos into seamless systems in 90 days—without expensive consultants or complicated software
          </div>
          <Button 
            onClick={() => scrollToSection('apply')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Let's Talk Goals
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Sound Familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Flame className="w-12 h-12 mx-auto mb-5 text-red-500" />
                <h3 className="text-xl font-bold mb-4">You're the Bottleneck</h3>
                <p className="text-gray-600">
                  Everything runs through you. Your team can't make decisions without you, and you're working 60+ hour weeks just to keep things moving.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <TrendingUp className="w-12 h-12 mx-auto mb-5 text-green-500" />
                <h3 className="text-xl font-bold mb-4">Growing But Breaking</h3>
                <p className="text-gray-600">
                  Revenue is up but your systems are falling apart. What worked at $100k is crashing at $500k, and you're putting out fires daily.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Dizzy className="w-12 h-12 mx-auto mb-5 text-orange-500" />
                <h3 className="text-xl font-bold mb-4">Drowning in Details</h3>
                <p className="text-gray-600">
                  You started this business for freedom, but now you're trapped. Every vacation gets interrupted, every weekend has "quick" work tasks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            The FLOW Method™
          </h2>
          <div className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            Our proven methodology to transform your business from chaos to seamless flow—regardless of which package you choose
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Find Bottlenecks",
                items: [
                  "Identify your priorities",
                  "Assess your team capacity",
                  "Review financial systems",
                  "Analyze client experience"
                ]
              },
              {
                title: "Layout Solutions",
                items: [
                  "Document core processes",
                  "Implement the right technology",
                  "Train your team effectively",
                  "Ensure adoption across organization"
                ]
              },
              {
                title: "Optimize Systems",
                items: [
                  "Ask what's breaking and fix it",
                  "Continuously improve systems",
                  "Repeat successful processes",
                  "Scale with confidence"
                ]
              },
              {
                title: "Win Back Time",
                items: [
                  "Reclaim 10-15+ hours weekly",
                  "Step back from daily operations",
                  "Focus on growth and strategy",
                  "Enjoy the freedom you started for"
                ]
              }
            ].map((pillar, index) => (
              <Card key={index} className="bg-gray-50 border-l-4 border-l-indigo-500 p-8 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 pb-5">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {pillar.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Choose Your Transformation
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Fix the Bottlenecks",
                target: "1-3 employees • \"I'm the bottleneck\"",
                price: "$12,000",
                promise: "Remove yourself as the bottleneck and multiply your team's capacity in 60 days",
                features: [
                  "2-day bottleneck elimination intensive",
                  "4 Bi-weekly 60-min strategy sessions",
                  "Delegation-focused AI training & setup",
                  "Essential systems documentation",
                  "Founder liberation roadmap",
                  "Private Slack channel (24hr response)",
                  "Lifetime access to Poquillo Alumni LinkedIn group"
                ],
                featured: false
              },
              {
                title: "Stabilize and Scale",
                target: "4-8 employees • \"Systems are breaking\"",
                price: "$12,000",
                promise: "Stabilize your growth and reclaim 10-15 hours weekly within 6 months",
                features: [
                  "3-day growth stabilization intensive",
                  "Bi-weekly 75-min strategy sessions",
                  "Growth-focused AI training & implementation",
                  "Scalable systems documentation",
                  "Team training materials",
                  "6 months strategic guidance",
                  "Private Slack channel (24hr response)",
                  "Lifetime access to Poquillo Alumni LinkedIn group"
                ],
                featured: true
              },
              {
                title: "Freedom to Step Back",
                target: "9-12 employees • \"I need to step back\"",
                price: "$35,000",
                promise: "Transform from operator to CEO while maintaining growth and reclaiming 15+ hours weekly",
                features: [
                  "5-day CEO transformation intensive",
                  "Bi-weekly 90-min executive sessions",
                  "Complete leadership team development",
                  "Exclusive AI training & integration",
                  "Operational independence roadmap",
                  "6 months transformation guidance",
                  "Private Slack channel (24hr response)",
                  "Lifetime access to Poquillo Alumni LinkedIn group"
                ],
                featured: false
              }
            ].map((pkg, index) => (
              <Card key={index} className={`relative text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.featured ? 'border-2 border-indigo-500 scale-105' : ''}`}>
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold mb-4">{pkg.title}</CardTitle>
                  <div className="text-gray-600 mb-5">{pkg.target}</div>
                  <div className="text-4xl font-black text-gray-900 mb-5">{pkg.price}</div>
                  <div className="bg-blue-50 text-indigo-700 p-4 rounded-lg font-semibold">
                    {pkg.promise}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('apply')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Book Discovery Call
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="text-center p-8 shadow-lg max-w-2xl mx-auto">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">Ongoing Coaching</h3>
              <p className="text-lg text-gray-600 mb-5">
                For graduates seeking continued guidance and accountability
              </p>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                $3,000
                <span className="text-lg font-normal text-gray-600 ml-2">
                  (3-month program)
                </span>
              </div>
              <p className="text-sm text-gray-500 italic">
                Available after completing your transformation package
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Schedule a Chat",
                description: "Fill out a simple form and book a time to discuss your specific situation"
              },
              {
                number: "2",
                title: "Consultation",
                description: "Invest $3,000 in a deep-dive consultation to find your perfect solution"
              },
              {
                number: "3",
                title: "Get Guidance",
                description: "Receive expert guidance and support every step of the way as you implement"
              },
              {
                number: "4",
                title: "Transform",
                description: "Follow our proven FLOW Method™ with ongoing support to eliminate chaos"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Scale Without the Chaos?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Schedule a chat to see which transformation is right for your business
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
            Schedule a Chat
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Poquillo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
