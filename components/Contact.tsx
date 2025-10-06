
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

type FormStatus = 'idle' | 'sending' | 'success';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== 'idle' || !formData.email || !formData.name || !formData.message) return;

    setStatus('sending');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormData({ name: '', email: '', message: '' });
    setStatus('success');
  };

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        
        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
             <p className="text-lg text-green-400 bg-green-500/10 border border-green-500/30 rounded-full py-3 px-6">
              Thank you! I'll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="appearance-none min-w-0 w-full rounded-full border-2 border-white/20 bg-white/5 px-5 py-3 text-base text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 sm:text-sm"
                    placeholder="Your Name"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full rounded-full border-2 border-white/20 bg-white/5 px-5 py-3 text-base text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 sm:text-sm"
                    placeholder="Your Email"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="appearance-none min-w-0 w-full rounded-3xl border-2 border-white/20 bg-white/5 px-5 py-3 text-base text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 sm:text-sm"
                  placeholder="Your Message"
                  disabled={status === 'sending'}
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-orange-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 disabled:from-gray-600 disabled:to-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[80%] bg-gradient-radial from-blue-600/20 via-blue-600/5 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      ></div>
    </SectionWrapper>
  );
};

export default Contact;
