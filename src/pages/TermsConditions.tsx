
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Poquillo™
          </Link>
          <Link to="/">
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Terms & Conditions Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Terms & Conditions
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              1.1 These terms and conditions shall govern your use of our website and any services offered by Poquillo.
            </p>
            <p className="text-gray-700 mb-4">
              1.2 By using our website or services, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
            </p>
            <p className="text-gray-700 mb-4">
              1.3 If you register with our website, submit any material to our website, purchase any services, or use any of our website services, we will ask you to expressly agree to these terms and conditions.
            </p>
            <p className="text-gray-700">
              1.4 You must be at least 18 years of age to use our website or services; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Services</h2>
            <p className="text-gray-700 mb-4">
              2.1 Poquillo LLC offers business coaching, consulting, and strategy services to entrepreneurs and business owners.
            </p>
            <p className="text-gray-700 mb-4">
              2.2 The exact nature of the services provided will be as described in the specific service package purchased.
            </p>
            <p className="text-gray-700 mb-4">
              2.3 We reserve the right to modify or withdraw any service at any time.
            </p>
            <p className="text-gray-700">
              2.4 Services are provided on an "as is" and "as available" basis. We make no guarantee of availability, fitness for purpose, or that the services will meet your specific requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Payments and Refunds</h2>
            <p className="text-gray-700 mb-4">
              3.1 All payments for our services shall be made in advance unless otherwise agreed in writing.
            </p>
            <p className="text-gray-700 mb-4">
              3.2 Prices for services are subject to change at any time, but changes will not affect any services you have already purchased.
            </p>
            <p className="text-gray-700 mb-4">
              3.3 Payment processing services for Poquillo LLC are provided by our payment processors, and are subject to their respective terms of service.
            </p>
            <p className="text-gray-700 mb-4">
              3.4 Unless explicitly stated otherwise, all sales are final. We do provide a 14-day "cooling off period" during which refunds may be provided at our discretion if you have not substantially consumed the service.
            </p>
            <p className="text-gray-700">
              3.5 After the cooling off period, no refunds will be provided for any reason, and any outstanding payment installments agreed upon at the time of purchase will remain due.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              4.1 All content included on our website and in our services, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of Poquillo LLC or its suppliers and protected by copyright and other laws.
            </p>
            <p className="text-gray-700 mb-4">
              4.2 Our content, materials, and methodology are provided for your personal use only and may not be reproduced, published, transmitted, distributed, displayed, performed, edited, sold, or otherwise exploited for any other purposes without our prior written consent.
            </p>
            <p className="text-gray-700">
              4.3 You retain any and all of your intellectual property rights to materials you submit as part of our coaching or consulting services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. User Content and Marketing Consent</h2>
            <p className="text-gray-700 mb-4">
              5.1 In these terms and conditions, "your content" means all materials (including without limitation text, images, audio, video, etc.) that you submit to us or our website for processing, publication, or storage.
            </p>
            <p className="text-gray-700 mb-4">
              5.2 You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your content in any existing or future media. You also grant to us the right to sub-license these rights.
            </p>
            <p className="text-gray-700 mb-4">
              5.3 You warrant and represent that your content will comply with these terms and conditions and that you have the right to make your content available to us for all the purposes specified in the terms.
            </p>
            <p className="text-gray-700 mb-4">
              5.4 Your content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party.
            </p>
            <div className="text-gray-700 mb-4">
              <p className="mb-2">5.5 Marketing Communications and Consent:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>a) When you provide your email address or contact information through our website, forms, purchases, or content downloads, we may collect and store this information for marketing purposes.</li>
                <li>b) By providing your contact information, you acknowledge that you may receive marketing communications from us, including newsletters, promotional offers, educational content, and announcements.</li>
                <li>c) We implement a "double opt-in" process for our marketing list where possible, requiring you to confirm your subscription.</li>
                <li>d) We respect your communication preferences and provide clear opt-out methods in all marketing messages.</li>
                <li>e) Our marketing practices comply with applicable laws including CAN-SPAM (US), CASL (Canada), and similar regulations.</li>
                <li>f) You have the right to withdraw your marketing consent at any time through methods outlined in our Privacy Policy.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Warranties and Liability</h2>
            <p className="text-gray-700 mb-4">
              6.1 We do not warrant the completeness or accuracy of the information published on this website or provided in our services.
            </p>
            <p className="text-gray-700 mb-4">
              6.2 To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website, services, and these terms and conditions.
            </p>
            <p className="text-gray-700 mb-4">
              6.3 Nothing in these terms and conditions will limit or exclude our or your liability for fraud, death or personal injury caused by negligence, or any other liability that cannot be limited by law.
            </p>
            <p className="text-gray-700">
              6.4 Subject to section 6.3, we will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control, business losses, or any loss of or damage to your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              7.1 We respect your confidential information and expect you to respect the confidential information of other participants in group coaching sessions or programs.
            </p>
            <p className="text-gray-700 mb-4">
              7.2 "Confidential Information" means all non-public information that is designated as confidential or that, given the nature of the information or circumstances surrounding its disclosure, reasonably should be understood to be confidential.
            </p>
            <p className="text-gray-700">
              7.3 You agree not to disclose any Confidential Information of other participants to any third party without express permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Testimonials and Reviews</h2>
            <p className="text-gray-700 mb-4">
              8.1 By providing a testimonial, review, or case study about our services, you consent to us using your name, likeness, and the content of your review in our marketing materials.
            </p>
            <p className="text-gray-700">
              8.2 We reserve the right to edit testimonials for clarity, grammar, or length, but will not change the meaning or sentiment of the testimonial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Service Access and Limitations</h2>
            <p className="text-gray-700 mb-4">
              9.1 We do not guarantee that our website or services will be secure or free from bugs or viruses.
            </p>
            <p className="text-gray-700 mb-4">
              9.2 We reserve the right to restrict access to some areas of our website, or our entire website, or any of our services, at our discretion.
            </p>
            <p className="text-gray-700">
              9.3 We cannot guarantee that our services will always be available or uninterrupted. We may suspend, withdraw, discontinue, or change all or any part of our services without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Program Rules and Code of Conduct</h2>
            <div className="text-gray-700 mb-4">
              <p className="mb-2">10.1 While participating in our programs, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Treat coaches and other participants with respect</li>
                <li>Attend scheduled sessions on time</li>
                <li>Complete agreed-upon action items</li>
                <li>Maintain the confidentiality of materials provided</li>
                <li>Use the services for lawful purposes only</li>
              </ul>
            </div>
            <p className="text-gray-700">
              10.2 We reserve the right to terminate your participation in any program if you violate these rules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Variation</h2>
            <p className="text-gray-700 mb-4">
              11.1 We may revise these terms and conditions from time to time.
            </p>
            <p className="text-gray-700">
              11.2 The revised terms and conditions shall apply to the use of our website and services from the date of publication of the revised terms and conditions on the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Assignment</h2>
            <p className="text-gray-700 mb-4">
              12.1 You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.
            </p>
            <p className="text-gray-700">
              12.2 You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Severability</h2>
            <p className="text-gray-700 mb-4">
              13.1 If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.
            </p>
            <p className="text-gray-700">
              13.2 If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Law and Jurisdiction</h2>
            <p className="text-gray-700">
              14.1 These terms and conditions will be governed by and construed in accordance with the laws of Texas, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Texas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              15.1 Poquillo is based in Texas, United States.
            </p>
            <div className="text-gray-700">
              <p className="mb-2">15.2 You can contact us:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>(a) to schedule a conversation: <a href="https://calendly.com/poquillo/30-min" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">https://calendly.com/poquillo/30-min</a></li>
                <li>(b) through our website: <a href="https://poquillo.co" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">https://poquillo.co</a></li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">16. Blog-Specific Terms</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">16.1 Comments and User-Generated Content</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>If you leave comments on our blog, the information you provide (name, email, website, comment content) will be stored in our database</li>
                <li>Comments may be reviewed, edited, or deleted at our sole discretion</li>
                <li>By posting comments, you grant us the right to republish your comments for promotional purposes</li>
                <li>We reserve the right to remove any comments that are offensive, inappropriate, or violate our content guidelines</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">16.2 RSS Feeds</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our blog may offer RSS feeds allowing you to subscribe to content updates</li>
                <li>Information shared through RSS feeds is limited to published content and does not include personal information beyond what appears in the public post</li>
                <li>By subscribing to our RSS feeds, you accept our standard Terms & Conditions</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">16.3 Guest Contributors</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>If you submit content to our blog as a guest contributor, you retain copyright ownership of your content</li>
                <li>By submitting content, you grant Poquillo a non-exclusive, perpetual, royalty-free license to publish, distribute, and promote your content across our platforms</li>
                <li>Guest contributors are responsible for ensuring their content does not infringe on third-party rights</li>
                <li>We reserve the right to edit guest content for clarity, grammar, or to align with our brand voice</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">16.4 Content Monetization</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our blog may contain affiliate links to products or services we recommend</li>
                <li>We may receive compensation if you purchase products through these links</li>
                <li>All affiliate relationships are disclosed in accordance with FTC guidelines</li>
                <li>Sponsored content will be clearly labeled as such</li>
                <li>We only recommend products or services we believe will provide value to our audience</li>
                <li>Monetization does not influence our editorial integrity or the opinions expressed</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
