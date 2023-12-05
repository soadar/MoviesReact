import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Container />} />
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="/search/:query" element={<MovieSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
