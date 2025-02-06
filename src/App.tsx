import { useState, useEffect } from "react";
import Main from "./components/Main";
import { Loader } from "lucide-react";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      setTimeout(() => {
        window.removeEventListener("load", handleLoad)
        window.scrollTo(0, 0);
      }, 2000);
    }
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Main />
    </div>
  );
}

export default App;
