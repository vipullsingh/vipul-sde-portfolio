import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const mailtoLink = `mailto:${RESUME_DATA.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    };

  return (
    <div className="h-full w-full flex items-center justify-center p-6 bg-latte-50 relative">
       {/* Decor */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white skew-y-3 origin-bottom-left -z-0"></div>

       <div className="max-w-4xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
           <div>
               <h2 className="text-5xl font-display font-bold text-espresso-900 mb-6">Let's build something.</h2>
               <p className="text-espresso-600 text-lg mb-8 leading-relaxed">
                   Open to freelance projects and full-time opportunities. Let's discuss your next SaaS product over virtual coffee.
               </p>
               <div className="space-y-4">
                   <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-3 text-espresso-800 hover:text-saas-cyan transition-colors">
                       <span className="w-10 h-10 rounded-full bg-latte-200 flex items-center justify-center">✉️</span>
                       {RESUME_DATA.email}
                   </a>
                   <a href={RESUME_DATA.links.linkedin} target="_blank" className="flex items-center gap-3 text-espresso-800 hover:text-saas-cyan transition-colors">
                       <span className="w-10 h-10 rounded-full bg-latte-200 flex items-center justify-center">👔</span>
                       LinkedIn Profile
                   </a>
               </div>
           </div>

           <div className="glass-card p-8 rounded-3xl shadow-soft">
               <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                       <label className="text-xs font-bold text-espresso-500 uppercase tracking-wider">Name</label>
                       <input 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         type="text" 
                         className="w-full mt-1 px-4 py-3 rounded-xl bg-latte-50 border border-latte-200 focus:outline-none focus:border-saas-cyan transition-colors" 
                         placeholder="Jane Doe"
                       />
                   </div>
                   <div>
                       <label className="text-xs font-bold text-espresso-500 uppercase tracking-wider">Email</label>
                       <input 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         type="email" 
                         className="w-full mt-1 px-4 py-3 rounded-xl bg-latte-50 border border-latte-200 focus:outline-none focus:border-saas-cyan transition-colors" 
                         placeholder="jane@example.com"
                       />
                   </div>
                   <div>
                       <label className="text-xs font-bold text-espresso-500 uppercase tracking-wider">Message</label>
                       <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         rows={3} 
                         className="w-full mt-1 px-4 py-3 rounded-xl bg-latte-50 border border-latte-200 focus:outline-none focus:border-saas-cyan transition-colors resize-none" 
                         placeholder="Project details..."
                       ></textarea>
                   </div>
                   <button className="w-full py-4 rounded-xl bg-espresso-900 text-white font-bold hover:bg-saas-cyan transition-colors shadow-lg">
                       Send Message
                   </button>
               </form>
           </div>
       </div>
    </div>
  );
};

export default Contact;