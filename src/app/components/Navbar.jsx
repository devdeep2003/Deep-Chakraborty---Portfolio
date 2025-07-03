"use client";
import React, { useState } from "react";
import { Menu, X , DownloadIcon} from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigate = (page) =>{
    router.push(`/${page}`)
  }

  return (
    <nav className="top-0 sticky p-8 bg-amber-50 text-black border rounded-4xl m-4 z-50">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Deep </span>
          <span>Chakraborty</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("")}>About</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("projects")}>Projects</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("extracurriculars")} >Extracurriculars</li>
          <a href="/Deep_Chakraborty_s_Resume.pdf" download><li className="cursor-pointer hover:text-blue-600 flex gap-1">Resume <DownloadIcon size={20}/></li></a> 
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 font-medium">
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("")}>About</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("projects")}>Projects</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={()=>navigate("extracurriculars")}>Extracurriculars</li>
         <a href="/Deep_Chakraborty_s_Resume.pdf" download><li className="cursor-pointer hover:text-blue-600 flex gap-1">Resume <DownloadIcon size={20}/></li></a> 
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
