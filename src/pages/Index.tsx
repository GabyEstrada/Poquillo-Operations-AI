import { ArrowRight, Flame, TrendingUp, AlertCircle, CheckCircle, Heart, Users, Stethoscope, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    window.open('https://app.reclaim.ai/m/gaby-estrada/poquillo-bgss', '_blank');
  };

  const handleQuizClick = () => {
    // TODO: Add quiz link when available
    console.log('Quiz button clicked');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-lg z-50">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Poquillo™
          </div>
          <Button 
            onClick={handleCTAClick}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            Book Your Strategy Session
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-12 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Scale Without the Chaos
          </h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90 font-medium max-w-3xl mx-auto">
            We help overwhelmed business owners eliminate chaos, work ON their business not IN it, and scale with confidence.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              onClick={handleCTAClick}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Book Your Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={handleQuizClick}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Take the 60-Second Operations Quiz
            </Button>
          </div>
          <div className="text-sm opacity-60 italic">
            *Most clients see real results in 90 days or less 😉
          </div>
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
            Our proven methodology to transform your business from chaos to seamless flow.
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
                  "Equip your team with practical skills (operations + AI)",
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
                  "Stop working 60+ hour weeks just to keep up",
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

      {/* Who This Is For Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Who is the FLOW Method™ For?
          </h2>
          <div className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            Health and wellness small businesses—especially those focused on movement, healing, and holistic care.
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-200">
              <CardContent className="p-0">
                <Stethoscope className="w-12 h-12 mx-auto mb-5 text-indigo-600" />
                <h3 className="text-lg font-bold mb-3 text-gray-900">Movement & Manual Therapy</h3>
                <p className="text-gray-600 text-sm">
                  Chiropractors, physical therapists, Pilates instructors
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-200">
              <CardContent className="p-0">
                <Users className="w-12 h-12 mx-auto mb-5 text-emerald-600" />
                <h3 className="text-lg font-bold mb-3 text-gray-900">Body-Based Coaching</h3>
                <p className="text-gray-600 text-sm">
                  Yoga therapists, corrective exercise specialists
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-violet-50 border-violet-200">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 mx-auto mb-5 text-violet-600" />
                <h3 className="text-lg font-bold mb-3 text-gray-900">Holistic & Preventative Wellness</h3>
                <p className="text-gray-600 text-sm">
                  Naturopaths, nutritionists, health coaches
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-amber-50 border-amber-200">
              <CardContent className="p-0">
                <Brain className="w-12 h-12 mx-auto mb-5 text-amber-600" />
                <h3 className="text-lg font-bold mb-3 text-gray-900">Emotional & Nervous System Wellness</h3>
                <p className="text-gray-600 text-sm">
                  Somatic therapists, private practice counselors
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                If you're running a <span className="text-indigo-600 font-semibold">heart-led practice</span> and need help with operations, systems, or sustainable growth—<span className="text-indigo-600 font-semibold">we're here for you</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our Programs
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Strategy Session card */}
            <Card className="p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-200 bg-white">
              <CardHeader className="p-0 pb-8">
                <CardTitle className="text-3xl font-bold mb-6 text-gray-900">Strategy Session</CardTitle>
                <div className="text-xl font-semibold text-green-600 mb-6">
                  30 minutes • FREE • Your starting point
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We'll quickly assess where you are, where you want to go, and create a clear plan for how you can work ON your business, not just IN it. Perfect for founders who want to stop working 60+ hour weeks just to keep up and are serious about moving forward with their business goals. You'll leave with clarity on your next steps—whether that's with us or on your own!
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Book Your Strategy Session
                </Button>
              </CardContent>
            </Card>

            {/* The Deep Dive card */}
            <Card className="p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-200 bg-white">
              <CardHeader className="p-0 pb-8">
                <CardTitle className="text-3xl font-bold mb-6 text-gray-900">The Deep Dive</CardTitle>
                <div className="text-xl font-semibold text-indigo-600 mb-6">
                  60 minutes • Comprehensive business audit
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  A comprehensive business audit and custom roadmap where we'll analyze your current bottlenecks and systems gaps, assess your team capacity and growth readiness, and create a prioritized action plan. You'll receive immediate value with a written assessment and roadmap.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Book Your Strategy Session
                </Button>
              </CardContent>
            </Card>

            {/* The Breakthrough card */}
            <Card className="p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="p-0 pb-8">
                <CardTitle className="text-3xl font-bold mb-6 text-gray-900">The Breakthrough</CardTitle>
                <div className="text-xl font-semibold text-indigo-600 mb-6">
                  Fix your biggest bottlenecks in days, not months
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Whether you're a team of one or scaling toward twelve, this intensive is built to meet you where you are—whether you're buried in day-to-day tasks or preparing to step back into your CEO role. We'll identify and eliminate your biggest operational roadblocks, fast. Plus, you'll get hands-on guidance with AI tools that simplify your workflow—and learn how to manage them confidently, no tech background needed.
                </p>
                <div className="bg-blue-50 text-indigo-700 p-6 rounded-lg font-medium text-lg border-l-4 border-indigo-300">
                  This is the place to start. The most common response we get is "where was this when I started? It would have saved me soooo much time and soooo much money."
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Book Your Strategy Session
                </Button>
              </CardContent>
            </Card>

            {/* The Partnership card */}
            <Card className="p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="p-0 pb-8">
                <CardTitle className="text-3xl font-bold mb-6 text-gray-900">The Partnership</CardTitle>
                <div className="text-xl font-semibold text-indigo-600 mb-6">
                  Want dedicated guidance every step of the way?
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  In The Partnership, you get expert guidance to implement everything we uncover in The Deep Dive and full access to everything included in The Breakthrough. We'll be there every step of the way as you transform your operations, integrate smart AI solutions, and gain the confidence to run your systems independently—even with a lean team.
                </p>
                <div className="bg-blue-50 text-indigo-700 p-6 rounded-lg font-medium text-lg border-l-4 border-indigo-300">
                  You get The Breakthrough included AND ongoing support to ensure everything actually gets implemented and works.
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Book Your Strategy Session
                </Button>
              </CardContent>
            </Card>

            {/* The Community card */}
            <Card className="p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center bg-white">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">The Community</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Stay connected and keep growing with monthly group calls, community access, and continued support.
                </p>
                <p className="text-lg text-gray-500 italic">
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
                title: "Strategy Session",
                description: "Book your free 30-minute session to assess fit and discover your high-level pain points."
              },
              {
                number: "2",
                title: "The Deep Dive",
                description: "If approved, complete your comprehensive 60-minute business audit and receive your custom roadmap."
              },
              {
                number: "3",
                title: "Choose Your Path",
                description: "Based on Deep Dive results, select from The Breakthrough, The Partnership, or ongoing Community support."
              },
              {
                number: "4",
                title: "Transform & Scale",
                description: "Follow our proven FLOW Method™ with expert guidance to eliminate chaos and reclaim your time."
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

      {/* New Section - Team Size */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
            Poquillo is built for growing teams of 1 to 12 employees—because that's where the chaos hits hardest and smart systems matter most.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Scale Without the Chaos?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Book your free Strategy Session and start your transformation
          </p>
          <Button 
            onClick={handleCTAClick}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Book Your Strategy Session
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2025 Poquillo™. All rights reserved.</p>
          <div className="text-sm space-x-4">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-500">•</span>
            <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
