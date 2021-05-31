import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import IsMobile from "ismobilejs";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { SuccessScreen } from "./components/SuccessScreen";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const userAgent = window.navigator;
    setIsMobile(IsMobile(userAgent).any);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pagination = {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route exact path="/">
          <Dashboard isMobile={isMobile} pagination={pagination} />
        </Route>
        <Route exact path="/cart">
          <Cart isMobile={isMobile} />
        </Route>
        <Route exact path="/thanks">
          <SuccessScreen />
        </Route>
        <Route exact path="/">
          <Footer isMobile={isMobile} pagination={pagination} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
