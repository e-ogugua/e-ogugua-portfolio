import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-blue-400 transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/ecommerce" className="hover:text-blue-400 transition-colors">E-commerce Solutions</Link></li>
              <li><Link href="/services/automation" className="hover:text-blue-400 transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Development</h3>
            <ul className="space-y-2">
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Our Work</Link></li>
              <li><Link href="/technologies" className="hover:text-blue-400 transition-colors">Technologies</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Development Blog</Link></li>
              <li><Link href="/open-source" className="hover:text-blue-400 transition-colors">Open Source</Link></li>
            </ul>
          </div>

          {/* Consulting */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Consulting</h3>
            <ul className="space-y-2">
              <li><Link href="/consulting/strategy" className="hover:text-blue-400 transition-colors">Tech Strategy</Link></li>
              <li><Link href="/consulting/architecture" className="hover:text-blue-400 transition-colors">System Architecture</Link></li>
              <li><Link href="/consulting/performance" className="hover:text-blue-400 transition-colors">Performance Optimization</Link></li>
              <li><Link href="/consulting/security" className="hover:text-blue-400 transition-colors">Security Audit</Link></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Training</h3>
            <ul className="space-y-2">
              <li><Link href="/training/workshops" className="hover:text-blue-400 transition-colors">Workshops</Link></li>
              <li><Link href="/training/courses" className="hover:text-blue-400 transition-colors">Online Courses</Link></li>
              <li><Link href="/training/mentorship" className="hover:text-blue-400 transition-colors">1:1 Mentorship</Link></li>
              <li><Link href="/training/corporate" className="hover:text-blue-400 transition-colors">Corporate Training</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Email</h4>
              <a href="mailto:e.ogugua.dev@gmail.com" className="hover:underline">e.ogugua.dev@gmail.com</a>
            </div>
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Phone</h4>
              <a href="tel:+2348123456789" className="hover:underline">+234 812 345 6789</a>
            </div>
            <div>
              <h4 className="font-medium text-blue-400 mb-2">Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://twitter.com/emmanuelogugua" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/emmanuelogugua" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/emmanuelogugua" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© {currentYear} Emmanuel Ogugua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
