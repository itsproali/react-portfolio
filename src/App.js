import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
const Navbar = React.lazy(() => import("./pages/shared/Navbar"));
const Footer = React.lazy(() => import("./pages/shared/Footer"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Project = React.lazy(() => import("./pages/Project/Project"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const ProjectDetails = React.lazy(() =>
  import("./pages/Project/ProjectDetails")
);
const NotFound = React.lazy(() => import("./pages/shared/NotFound"));
const Loader = React.lazy(() => import("./pages/shared/Loader"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  console.log(isFalse);
  return (
    <div>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </div>
  );
}

export default App;
