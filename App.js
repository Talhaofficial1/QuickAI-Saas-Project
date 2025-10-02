import Home from "./Pages/Home";
import Community from "./Pages/Community";
import BlogTitles from "./Pages/BlogTitles";
import Dashboard from "./Pages/Dashboard";
import GenerateImages from "./Pages/GenerateImages";
import RemoveBackground from "./Pages/RemoveBackground";
import Layout from "./Pages/Layout";
import RemoveObject from "./Pages/RemoveObject";
import ReviewResume from "./Pages/ReviewResume";
import WriteArticles from "./Pages/WriteArticles";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          //nested routes
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="write-articles" element={<WriteArticles />} />
            <Route path="blogtitles" element={<BlogTitles />} />
            <Route path="generateimages" element={<GenerateImages />} />
            <Route path="removebackground" element={<RemoveBackground />} />
            <Route path="reviewresume" element={<ReviewResume />} />
            <Route path="removeobject" element={<RemoveObject />} />
            <Route path="community" element={<Community />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
