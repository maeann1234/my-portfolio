"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col space-y-8">
            <h1 className="text-[5.5rem] md:text-[6.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[0.9] transition-colors">
              Let&apos;s build<br />something.
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md transition-colors">
              Whether you have a specific project in mind, need backend architecture advice, or just want to connect, my inbox is always open.
            </p>

            <div className="pt-8 space-y-6">
              <a href="mailto:hello@maeann.com" className="flex items-center gap-4 text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 group-hover:border-zinc-900 dark:group-hover:border-zinc-50 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                hello@maeann.com
              </a>
              
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 group-hover:border-zinc-900 dark:group-hover:border-zinc-50 transition-all shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.41 6.5-7.14a5.4 5.4 0 0 0-1.54-3.93 5.05 5.05 0 0 0 .16-3.87s-1.1-.35-3.6 1.35a12.1 12.1 0 0 0-6.6 0c-2.5-1.7-3.6-1.35-3.6-1.35a5.05 5.05 0 0 0 .16 3.87 5.4 5.4 0 0 0-1.54 3.93c0 5.73 3.36 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.02V22"></path>
                    <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                GitHub Profile
              </a>
              
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 group-hover:border-zinc-900 dark:group-hover:border-zinc-50 transition-all shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                LinkedIn Network
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-300">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in zoom-in duration-500 py-20">
                <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">Message Sent!</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50 ml-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe" 
                      className="w-full h-16 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 text-lg text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 outline-none focus:border-zinc-900 dark:focus:border-zinc-50 focus:ring-4 focus:ring-zinc-900/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50 ml-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com" 
                      className="w-full h-16 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 text-lg text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 outline-none focus:border-zinc-900 dark:focus:border-zinc-50 focus:ring-4 focus:ring-zinc-900/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50 ml-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    className="w-full h-16 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 text-lg text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 outline-none focus:border-zinc-900 dark:focus:border-zinc-50 focus:ring-4 focus:ring-zinc-900/5 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50 ml-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    className="w-full h-48 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 text-lg text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 outline-none focus:border-zinc-900 dark:focus:border-zinc-50 focus:ring-4 focus:ring-zinc-900/5 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 w-full h-16 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-lg font-bold rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}