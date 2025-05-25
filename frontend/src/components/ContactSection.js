import React from 'react';

const ContactSection = () => (
  <section className="bg-blue-100 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">"Get in Touch"</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      {[
        { title: 'Email', value: 'example@email.com' },
        { title: 'Facebook', value: 'facebook.com/cantwaittosay' },
        { title: 'Email for Collabs & Sponsorships', value: 'collabs@email.com' },
        { title: 'Hotline Number', value: '+123 456 7890' },
        { title: 'YouTube', value: 'youtube.com/cantwaittosay' },
        { title: 'TikTok', value: 'tiktok.com/@cantwaittosay' }
      ].map(({ title, value }, idx) => (
        <div key={idx}>
          <h3 className="text-blue-600 font-medium">{title}</h3>
          <p className="text-gray-700">{value}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ContactSection;
