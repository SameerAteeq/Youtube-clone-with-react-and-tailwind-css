import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/feed";
import Header from "./components/header";
import SearchResult from "./components/searchResult";
import VideoDeatils from "./components/video/videoDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDeatils />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
