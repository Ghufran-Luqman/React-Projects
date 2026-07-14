function App() {
  return (
    <div>

      <div className="flex items-center justify-between bg-slate-900 text-white p-4">

        <div className="font-bold">Logo</div>
        <div className="flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="grid grid-cols-2 text-white p-5 gap-4">
        <div className="bg-slate-500 p-3 rounded">Feature One</div>
        <div className="bg-slate-500 p-3 rounded">Feature Two</div>
        <div className="bg-slate-500 p-3 rounded">Feature Three</div>
        <div className="bg-slate-500 p-3 rounded">Feature Four</div>
        <div className="bg-slate-500 p-3 rounded">Feature Five</div>
        <div className="bg-slate-500 p-3 rounded">Feature Six</div>
      </div>
    </div>
  );
}

export default App
