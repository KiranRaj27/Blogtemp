import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./pages/Navbar";
import "./App.css";
import NotFoundPage from "./pages/NotfoundPage";
import Write from "./pages/Write";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/article-list" element={<ArticlesListPage />} />
              <Route path="/write" element={<Write />} />
              <Route path="/article/:name" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
