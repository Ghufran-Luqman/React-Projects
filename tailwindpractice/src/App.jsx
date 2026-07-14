import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between bg-slate-900 text-white p-4">
        <div className="font-bold">Logo</div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <button className="cursor-pointer sm:hidden" onClick={() => setOpen(!open)}>&#9776;</button>
      </div>
      
      {/* Mobile Nav */}
        {open && ( 
          <div className="flex flex-col items-center p-3 gap-2 bg-slate-900 text-white sm:hidden">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white p-5 gap-4 text-center font-semibold text-2xl sm:text-lg">
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600 hover:scale-102 transition-all duration-300">Feature One</div>
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600 hover:scale-102">Feature Two</div>
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600">Feature Three</div>
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600">Feature Four</div>
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600">Feature Five</div>
        <div className="bg-slate-500 p-3 rounded hover:bg-slate-600">Feature Six</div>
      </div>
    </div>
  );
}

export default App
