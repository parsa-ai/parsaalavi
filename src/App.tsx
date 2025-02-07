import { useState, useEffect } from "react";
import Main from "./components/Main";
import LoaderP from "./components/loading";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
    }
    window.addEventListener("load", handleLoad);
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener("load", handleLoad)
    }
  }, []);

  return (
    <div>
      {loading && <LoaderP />}
      <Main />
    </div>
  );
}

export default App;
