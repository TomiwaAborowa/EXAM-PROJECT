import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ErrorB from "./components/ErrorB";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import MyRepos from "./components/MyRepos";
import NotFound from "./components/NotFound";
import PageError from "./components/PageError";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="App">TOMIWA'S REPOSITORIES.</div> */}
      <br />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyRepos" element={<MyRepos />} />
          <Route path="/ErrorBoundary" element={<ErrorBoundary />} />
          <Route path="/ErrorB" element={<ErrorB />} />
          <Route path="/ErrorPage">
            <Route index element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
