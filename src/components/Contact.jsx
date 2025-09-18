import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with pre-filled form data
    const subject = encodeURIComponent(formData.subject || 'Contact Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:harshvashiyar@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleContactClick = (action) => {
    if (action === 'form') {
      // Pre-fill form with contact request
      setFormData({
        name: '',
        email: '',
        subject: 'Contact Request',
        message: 'Hi Harsh,\n\nI would like to get in touch with you regarding...'
      });
      // Scroll to form
      document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshvashiyar@gmail.com',
      href: 'mailto:harshvashiyar@gmail.com',
      action: 'mailto'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Phone available on request',
      href: '#',
      action: 'form'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'DAIICT, Gandhinagar',
      href: 'https://maps.google.com/?q=DAIICT+Gandhinagar',
      action: 'location'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/HarshVashiyar', label: 'GitHub', target: '_blank' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harsh-vashiyar-56063a251/', label: 'LinkedIn', target: '_blank' },
    { icon: Instagram, href: 'https://instagram.com/ae_harshiyee', label: 'Instagram', target: '_blank' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, action }) => (
                <a
                  key={label}
                  href={action === 'form' ? '#' : href}
                  target={action === 'location' ? '_blank' : (href.startsWith('mailto:') ? '_blank' : undefined)}
                  onClick={(e) => {
                    if (action === 'form') {
                      e.preventDefault();
                      handleContactClick(action);
                    }
                  }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300 group hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center group-hover:bg-orange-400/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{label}</div>
                    <div className="text-white font-medium group-hover:text-orange-400 transition-colors duration-300">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, target }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                    target={target}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-colors duration-300 resize-none"
                  placeholder="Tell me something..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2025 Harsh Vashiyar. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;