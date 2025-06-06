import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This privacy policy sets out how Poquillo uses and protects any information that you share with us when you use our website or services.
            </p>
            <p className="text-gray-700 mb-4">
              Poquillo is committed to ensuring that your privacy is protected. When we ask you to provide certain information by which you can be identified when using this website or our services, you can be assured that it will only be used in accordance with this privacy policy.
            </p>
            <p className="text-gray-700">
              Poquillo may update this policy from time to time by updating this page. You should check this page periodically to ensure that you are comfortable with any changes. This policy is effective from May 1, 2025.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">What We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Name and contact information including email address and phone number</li>
              <li>Demographic information such as address, postal code, preferences, and interests</li>
              <li>Business information such as business name, industry, size, and challenges</li>
              <li>Other information relevant to customer surveys, offers, and/or services</li>
              <li>Information about your visit to our website, including the pages you view</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We require this information to understand your needs and provide you with a better service. Specifically, we use your information for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Internal record keeping</li>
              <li>Improving our products and services</li>
              <li>Processing payments and managing your account</li>
              <li>Providing the coaching services you've purchased</li>
              <li>Customizing the website according to your interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Marketing Communications</h2>
            <p className="text-gray-700 mb-4">
              When you provide your contact information through our website forms, service purchases, or content downloads:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We may add you to our email marketing list to send newsletters, updates, promotional offers, and educational content</li>
              <li>We will provide clear opt-in choices when collecting your information for marketing purposes</li>
              <li>Each marketing email we send includes an easy unsubscribe option</li>
              <li>We will not sell or rent your email address to third parties for marketing purposes</li>
              <li>We may use your information for targeted social media or digital advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Security</h2>
            <p className="text-gray-700">
              We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies</h2>
            <p className="text-gray-700 mb-4">
              A cookie is a small file placed on your computer's hard drive. These files help analyze web traffic or let you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.
            </p>
            <p className="text-gray-700">
              Our website may use cookies to enhance your experience and to help us improve our website. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Links to Other Websites</h2>
            <p className="text-gray-700">
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and such sites are not governed by this privacy policy. You should exercise caution and look at the privacy policy applicable to the website in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Controlling Your Personal Information</h2>
            <p className="text-gray-700 mb-4">
              You have control over how we use your personal information, particularly for marketing purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>When you provide your email address or contact information, we will clearly indicate how it will be used</li>
              <li>You can opt out of marketing communications at any time by:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Clicking the "unsubscribe" link in any marketing email</li>
                  <li>Scheduling a time with us at <a href="https://calendly.com/poquillo/30-min" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">https://calendly.com/poquillo/30-min</a></li>
                  <li>Texting "STOP" to any SMS marketing messages</li>
                </ul>
              </li>
              <li>We will honor your opt-out requests promptly, typically within 10 business days</li>
              <li>Even after opting out of marketing communications, you may still receive transactional or service-related messages about programs you've purchased</li>
              <li>We will not sell, distribute, or lease your personal information to third parties for their own marketing purposes without your explicit consent</li>
              <li>You may request details of personal information which we hold about you under data protection laws. If you believe that any information we are holding on you is incorrect or incomplete, please schedule a time with us as soon as possible. We will promptly correct any information found to be incorrect.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How Long We Keep Your Information</h2>
            <p className="text-gray-700">
              We keep your information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to correction of your personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
            <p className="text-gray-700">
              If you wish to exercise any of these rights, please schedule a time with us at <a href="https://calendly.com/poquillo/30-min" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">https://calendly.com/poquillo/30-min</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to Our Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy or our treatment of your personal data, please schedule a time with us at <a href="https://calendly.com/poquillo/30-min" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">https://calendly.com/poquillo/30-min</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
