import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer"
import './App.scss';


function App() {
  return (
    <div className = "app">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
        <Route path = "/" exact element = {<Home />} />
        <Route path = "/news/:newsID" element = {<NewsDetail />} />
        <Route path='*' element = {<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
