import { contactInfo } from "../../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Contact
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Open to internships, collaborations, and exciting opportunities.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-full opacity-50"></div>
        
        <div className="space-y-8 relative z-10">

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              📧
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-300">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              💻
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">GitHub</h3>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-300">
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              💼
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</h3>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-300">
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              📍
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h3>
              <p className="text-xl font-bold text-slate-900">
                {contactInfo.location}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;