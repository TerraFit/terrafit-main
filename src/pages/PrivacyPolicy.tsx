import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0D1A0D] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-terra-green hover:text-terra-light-green mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-white/40 mb-8">Last Updated: March 17, 2026</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Section 1 - Introduction */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">1. Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                Welcome to TerraFit. We are committed to protecting your privacy and ensuring that your personal information is handled in a responsible manner in accordance with the <strong>Protection of Personal Information Act, 2013 (Act 4 of 2013)</strong> ("POPIA").
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                This Privacy Policy explains how TerraFit, a solution developed by Aemara Group ("we", "us", or "our"), collects, uses, discloses, and safeguards your personal information when you visit any of our websites, including:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><a href="https://terrafit.co.za/" className="text-terra-green hover:underline">https://terrafit.co.za/</a></li>
                <li><a href="https://terrafit-parks.com/" className="text-terra-green hover:underline">https://terrafit-parks.com/</a></li>
                <li><a href="https://terrafit-trail.com/" className="text-terra-green hover:underline">https://terrafit-trail.com/</a></li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                By using our Websites, you consent to the collection, use, and disclosure of your personal information as described in this policy.
              </p>
            </section>

            {/* Section 2 - Who We Are */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">2. Who We Are (The Responsible Party)</h2>
              <p className="text-white/80 leading-relaxed">
                TerraFit is the brand through which Aemara Group develops and manages outdoor fitness and adventure infrastructure. For the purposes of POPIA, <strong>Aemara Group</strong> is the "responsible party" that determines the purpose and means of processing your personal information.
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><strong>Company Name:</strong> Aemara Group</li>
                <li><strong>Websites:</strong> https://terrafit.co.za/, https://terrafit-parks.com/, https://terrafit-trail.com/</li>
                <li><strong>Contact Email:</strong> <a href="mailto:inquiry@aemaragroup.com" className="text-terra-green hover:underline">inquiry@aemaragroup.com</a></li>
                <li><strong>Information Officer:</strong> Didier Duc, Founder & CEO</li>
              </ul>
            </section>

            {/* Section 3 - What Personal Information We Collect */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">3. What Personal Information We Collect</h2>
              <p className="text-white/80 leading-relaxed">
                We may collect the following types of personal information directly from you when you interact with our Websites:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><strong>Contact Information:</strong> Your first and last name, email address, and telephone number when you make an inquiry via forms like "Start a Project" or "Contact Us".</li>
                <li><strong>Account Information:</strong> If you choose to register on our sites (should this feature be added in the future), we may collect a username and password.</li>
                <li><strong>Correspondence:</strong> Any information you provide when you contact us for support or with questions.</li>
                <li><strong>Technical Information:</strong> When you visit our Websites, we may automatically collect non-personal information about your device and browsing activity, including your IP address, browser type, operating system, and the pages you visit. This helps us improve our website experience.</li>
              </ul>
            </section>

            {/* Continue with all other sections from the privacy policy... */}
            {/* Section 4 - How We Use Your Information */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">4. How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed">
                We will only use your personal information for the specific purposes for which it was collected. These purposes include:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li>To respond to your inquiries and provide you with the information or assistance you request about TerraFit Trails or TerraFit Parks.</li>
                <li>To communicate with you regarding your projects, requests, or questions.</li>
                <li>To send you marketing communications (such as newsletters or project updates) only if you have provided your explicit consent to receive them. You may opt out of these communications at any time.</li>
                <li>To improve our Websites by analyzing how users interact with them, ensuring content is presented effectively.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            {/* Section 5 - Legal Basis for Processing */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">5. Legal Basis for Processing</h2>
              <p className="text-white/80 leading-relaxed">
                Under POPIA, we process your personal information on the following lawful bases:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><strong>Consent:</strong> Where you have freely given your consent, for example, to receive marketing communications.</li>
                <li><strong>Contractual Necessity:</strong> Where processing is necessary to respond to your request for a quote or information about our services, which is done at your request prior to entering into a contract.</li>
                <li><strong>Legitimate Interests:</strong> We may process your information for our legitimate interests, such as improving our websites and services, provided this does not override your fundamental rights.</li>
              </ul>
            </section>

            {/* Section 6 - Disclosure of Personal Information */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">6. Disclosure of Personal Information</h2>
              <p className="text-white/80 leading-relaxed">
                We will not sell, rent, or trade your personal information to third parties for their own marketing purposes. We may share your information with trusted third-party service providers only to the extent necessary to run our business and websites, including:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><strong>Website Hosting Providers:</strong> Such as Netlify, which hosts our websites.</li>
                <li><strong>Communication Tools:</strong> Services we use to manage email and inquiries.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                We ensure that any third-party service providers we engage are obligated to protect your personal information and process it in compliance with POPIA.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                We may also disclose your personal information if required to do so by law or in response to a valid request from a law enforcement or governmental authority.
              </p>
            </section>

            {/* Section 7 - Data Security */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">7. Data Security</h2>
              <p className="text-white/80 leading-relaxed">
                We are committed to protecting your personal information. We have implemented appropriate reasonable technical and organisational security measures to prevent loss, damage, or unauthorised access to your information. These measures include:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li>Securing our websites with SSL/TLS encryption to protect data transmitted between your browser and our servers.</li>
                <li>Implementing access controls to ensure that only authorised personnel have access to personal information.</li>
                <li>Regularly reviewing our data collection, storage, and processing practices.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                While we take these precautions seriously, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            {/* Section 8 - Your Rights Under POPIA */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">8. Your Rights Under POPIA</h2>
              <p className="text-white/80 leading-relaxed">
                You have certain rights regarding the personal information we hold about you. Under POPIA, you have the right to:
              </p>
              <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
                <li><strong>Request access</strong> to the personal information we hold about you (Right of Access).</li>
                <li><strong>Request correction or deletion</strong> of your personal information where it is inaccurate, irrelevant, or excessive (Right to Rectification and Deletion).</li>
                <li><strong>Object to the processing</strong> of your personal information (Right to Object).</li>
                <li><strong>Withdraw your consent</strong> at any time where we are relying on consent to process your information. This will not affect the lawfulness of any processing carried out before you withdraw your consent.</li>
                <li><strong>Lodge a complaint</strong> with the Information Regulator of South Africa.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                To exercise any of these rights, please contact our Information Officer using the details in Section 12. We will respond to your request within a reasonable timeframe and in accordance with POPIA.
              </p>
            </section>

            {/* Section 9 - Information Regulator */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">9. Information Regulator of South Africa</h2>
              <p className="text-white/80 leading-relaxed">
                If you are not satisfied with our response to any complaint or query regarding your personal information, you have the right to lodge a complaint with the Information Regulator:
              </p>
              <div className="bg-white/5 p-6 rounded-lg mt-2">
                <p className="text-white/80"><strong>The Information Regulator (South Africa)</strong><br />
                P.O Box 31533,<br />
                Braamfontein, Johannesburg, 2017</p>
                <p className="text-white/80 mt-2"><strong>Complaints Email:</strong> <a href="mailto:complaints.IR@justice.gov.za" className="text-terra-green hover:underline">complaints.IR@justice.gov.za</a></p>
              </div>
            </section>

            {/* Section 10 - Cookies */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">10. Cookies</h2>
              <p className="text-white/80 leading-relaxed">
                Our websites may use "cookies" to enhance your experience. Cookies are small text files placed on your device to help us analyse web traffic and understand how you use our site. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of the website.
              </p>
            </section>

            {/* Section 11 - Changes to Policy */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When we do, we will revise the "Last Updated" date at the top of this policy. In the event of significant changes, we may also notify you by email if we have your email address on record. We encourage you to periodically review this page for the latest information on our privacy practices.
              </p>
            </section>

            {/* Section 12 - Contact Us */}
            <section>
              <h2 className="font-display text-2xl font-bold text-terra-green mb-4">12. Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our handling of your personal information, please contact our Information Officer:
              </p>
              <div className="bg-terra-green/10 border border-terra-green/20 p-6 rounded-lg mt-2">
                <p className="text-white font-bold">Didier Duc, Founder & CEO</p>
                <p className="text-white/80"><strong>Email:</strong> <a href="mailto:inquiry@aemaragroup.com" className="text-terra-green hover:underline">inquiry@aemaragroup.com</a></p>
                <p className="text-white/80"><strong>Primary Website:</strong> <a href="https://terrafit.co.za/" className="text-terra-green hover:underline">https://terrafit.co.za/</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
