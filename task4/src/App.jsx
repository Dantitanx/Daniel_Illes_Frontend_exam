import{ useState, useEffect } from "react";

export default function App() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/cats")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
        setFilteredCats(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredCats(cats); 
    } else {
      const filtered = cats.filter(
        (cat) =>
          cat.name.toLowerCase().includes(searchTerm.toLowerCase()) || String(cat.age).includes(searchTerm) ||
          cat.gender.toLowerCase().includes(searchTerm.toLowerCase()) || cat.color.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCats(filtered);
    }
  };

  
  const handleDelete = (id) => {
    const updatedCats = filteredCats.filter((cat) => cat.id !== id);
    setFilteredCats(updatedCats);
  };

  return (
    <div className="bg-dark vh-100">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Cat Adoption</a>
          <form className="d-flex" role="search" onSubmit={handleSearchClick}>
            <input className="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container mt-4 vh-100">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Color</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredCats.map((cat, index) => (
              <tr key={cat.id}>
                <th scope="row">{index + 1}</th>
                <td>{cat.name}</td>
                <td>{cat.age}</td>
                <td>{cat.gender}</td>
                <td>{cat.color}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(cat.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
