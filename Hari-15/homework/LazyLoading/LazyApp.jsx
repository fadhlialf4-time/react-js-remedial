// Nomor 4
import { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function LazyApp() {
    const [page, setPage] =  useState("home")
        
    const renderPage = () => {
        switch (page) {
            case "about": return <About />;
            case "contact": return <Contact />
            default: return <Home />
        }
    }

  return (
    <>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>

      <Suspense fallback={<p>Sedang Loading...</p>}>
        {renderPage()}
      </Suspense>
    </>
  );
}

export default LazyApp;