import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600 tracking-wide">
          
           <span className="text-blue-600">
    Deep{" "}<span className="text-gray-900">Chakraborty</span>
  </span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
           "Coding is such an all-or-nothing phenomenon — either you do too much or you do nothing at all."
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="/" className="hover:text-blue-600 transition">
                About 
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-blue-600 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/extracurriculars" className="hover:text-blue-600 transition">
                Extracurriculars
              </a>
            </li>
            <li>
              <a href="/Deep_Chakraborty_s_Resume.pdf" download className="hover:text-blue-600 transition">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 text-sm">
            Jamshedpur
            <br />
            East Singhbhum
            <br />
            Jharkhand - 831002
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            Phone: +91 9508832351
          </p>
          <p className="text-gray-700 text-sm mt-2">Email: deepchakraborty.work2003@gmail.com </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61571349960206"
              className="text-gray-700 hover:text-blue-600 transition"
               target="blank"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/DeepChakra80505"
              className="text-gray-700 hover:text-blue-600 transition" target="blank"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-chakraborty-ab421b253/"
              className="text-gray-700 hover:text-blue-600 transition" target="blank"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/_why_so_deep_/"
              className="text-gray-700 hover:text-blue-600 transition" target="blank"
            >
              <Instagram size={20} />
            </a>
            <a href="https://github.com/devdeep2003" className="text-gray-700 hover:text-blue-600 transition" target="blank"><Github size={20}/></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p>
            &copy; {new Date().getFullYear()} DEEP CHAKRABORTY. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}