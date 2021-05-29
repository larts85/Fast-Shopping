import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import IsMobile from "ismobilejs";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator;
    setIsMobile(IsMobile(userAgent).any);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header isMobile={isMobile} />
        </Route>
        <Route path="/">
          <Dashboard isMobile={isMobile} />
        </Route>
        <Route exact path="/">
          <Footer isMobile={isMobile} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
