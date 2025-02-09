import React from "react";
import "/styles/globals.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 px-4">
      <div className="border-2 border-slate-50 max-w-lg w-full rounded-2xl overflow-hidden shadow-lg py-6 px-10 flex flex-col items-center">
        {/* Company Logo */}
      <img 
        className=""
        src="/logo.svg"
      />

        {/* Profile Picture */}
        <img 
          className="w-32 my-5 rounded-full" 
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
          alt="Philip Elhjälp" 
        />

        {/* Name and Title */}
        <div className="text-center">
          <h1 className="font-bold text-4xl text-slate-50 pb-2">Philip Falk</h1>
          <h2 className="text-gray-400 text-sm">Auktoriserad elektriker</h2>
          <p className="text-gray-200 text-sm py-10">Elinstallationer för företag och privatpersoner.</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="w-full flex gap-3 justify-center">
          <a href="tel:+46723071194" 
            className="border-2 bg-lime-800 border-lime-800 p-3 rounded-full">
            <img 
              src="/phone.svg"
              className=""
            />
          </a>
          <a href="mailto:philip@elhjalp.com" 
            className="border-2 border-sky-800 bg-sky-800 p-3 rounded-full">
            <img 
            src="/mail.svg"
            className=""
            />
          </a>
        </div>

          {/* Location Pills  */}
        <div className="flex gap-2 mt-14">
          <span className="text-slate-300 border-2 px-3 py-1 rounded-full text-sm">
            Borås
          </span>
          <span className="text-slate-300 border-2 px-3 py-1 rounded-full text-sm">
            Herrljunga
          </span>
        </div>
       


        {/* Social Media Links */}
        <div className="mt-5 flex gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61569419582779" 
            className="">
            <img src="/facebook.svg"/>
          </a>
          <a 
            href="https://www.instagram.com/elhjalpab/" 
            className="">
            <img src="/instagram.svg"/>
          </a>
          <a 
            href="https://www.linkedin.com/company/elhj%C3%A4lp-sverige-ab/posts/?feedView=all" 
            className="">
            <img src="/linkedin.svg"/>
            </a>
        </div>
      </div>
    </div>
    
  
  );
}
