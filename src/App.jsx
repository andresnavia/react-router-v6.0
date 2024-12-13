import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LayoutPublic></LayoutPublic>}>
          <Route element={<Inicio></Inicio>} index></Route>
          <Route element={<Blog></Blog>} path="/blog"></Route>
          <Route element={<BlogDetails></BlogDetails>} path="/blog/:id"></Route>
          <Route element={<Contacto></Contacto>} path="/contacto"></Route>
          <Route element={<NotFound></NotFound>} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
