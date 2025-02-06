function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-[1000]">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-slate-400 text-4xl animate-spin flex items-center justify-center border-t-slate-400 rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-slate-400 text-2xl animate-spin flex items-center justify-center border-t-blue-950 rounded-full"
            ></div>
          </div>
        </div>
  
      </div>
    );
  }