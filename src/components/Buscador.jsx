import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${name}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" id="fname" placeholder="Buscar pelicula" onChange={(e) => setName(e.target.value)}></input>
    </form>
  );
};

export default Search;
