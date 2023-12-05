import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import MovieSearch from "./components/MovieSearch";

function App() {
  // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Container />} />
          <Route path=":id" element={<Movie />} />

          {/* <Route path="toy" element={<Outlet />}>
            <Route path="hola2" element={<h1>Hola 2</h1>} />
          </Route> */}
        </Route>
        <Route path="/search/:query" element={<MovieSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
