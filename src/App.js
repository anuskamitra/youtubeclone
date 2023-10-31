import React from "react";
import { ContextApi } from "./context/ContextApi";
import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResult from "./components/SearchReasult";
import SearchResultVideo from "./components/SearchResultVideoCard";
import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <ContextApi>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          {/* <div className="text-6xl">Hello world!</div> */}
          <Header />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route
              path="searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextApi>
  );
};

export default App;
