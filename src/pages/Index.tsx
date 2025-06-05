import { ArrowRight, Flame, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
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
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-12 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
                <AlertCircle className="w-12 h-12 mx-auto mb-5 text-orange-500" />
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

      {/* Programs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our Programs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-200">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold mb-4">90-Minute Deep Dive Consultation</CardTitle>
                <div className="text-lg font-semibold text-indigo-600 mb-4">
                  The starting point for your transformation
                </div>
                <p className="text-gray-600 mb-6">
                  Invest in a comprehensive consultation where we'll analyze your business, identify your biggest bottlenecks, and create a roadmap for your specific situation. This is where everything begins.
                </p>
                <div className="text-3xl font-bold text-green-600 mb-4">
                  $3,000
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    (90-minute session)
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Schedule Your Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold mb-4">The Breakthrough</CardTitle>
                <div className="text-lg font-semibold text-indigo-600 mb-4">
                  Fix your biggest bottlenecks in days, not months
                </div>
                <p className="text-gray-600 mb-6">
                  Whether you have 3 employees or 12, whether you're drowning in daily operations or ready to step back as CEO. This intensive experience will identify and eliminate your biggest operational roadblocks.
                </p>
                <div className="bg-blue-50 text-indigo-700 p-4 rounded-lg font-medium">
                  This is the place to start. The most common response we get is "where was this when I started? It would have saved me soooo much time and soooo much money."
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Let's talk goals
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold mb-4">The Partnership</CardTitle>
                <div className="text-lg font-semibold text-indigo-600 mb-4">
                  Want dedicated guidance every step of the way?
                </div>
                <p className="text-gray-600 mb-6">
                  In The Partnership, you get expert guidance to implement everything we discover in The Breakthrough. We'll be there every step of the way as you transform your operations and reclaim your time.
                </p>
                <div className="bg-blue-50 text-indigo-700 p-4 rounded-lg font-medium">
                  You get The Breakthrough included AND ongoing support to ensure everything actually gets implemented and works.
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={() => scrollToSection('apply')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Let's talk goals
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">The Community</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Stay connected and keep growing with monthly group calls, community access, and continued support.
                </p>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  $3,000
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    (3-month program)
                  </span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Available after completing your transformation program
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Schedule a Chat",
                description: "Fill out a simple form and book a time to discuss your specific situation and goals"
              },
              {
                number: "2",
                title: "Deep Dive Consultation",
                description: "Invest $3,000 in our 90-minute consultation to analyze your business and create your custom roadmap"
              },
              {
                number: "3",
                title: "Choose Your Path",
                description: "Select from The Breakthrough, The Partnership, or ongoing Community support based on your needs"
              },
              {
                number: "4",
                title: "Transform & Scale",
                description: "Follow our proven FLOW Method™ with expert guidance to eliminate chaos and reclaim your time"
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
            Schedule your 90-minute consultation to get started
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
            Request to Work Together
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
