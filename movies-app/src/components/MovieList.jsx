import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import {FormMovie} from "./FormMovie";
import FormEditMovie from "./FormEditMovie";
import {TableRow} from "./TableRows";
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editMovie, setEditMovie] = useState(null);
  const [newMovie, setNewMovie] = useState(null);
  const [formResetKey, setFormResetKey] = useState(0);
  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try{
        const rsp = await fetch("http://localhost:5000/get.php");
        const data = await rsp.json();
        if(isMounted) setMovies(data);
      }catch(err){
        console.error("Failed to fetch movies", err);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);
  const handleEdit = (movie) => {
    setIsEdit(true);
    setEditMovie(movie);
  };
  const handleDelete = (movieId) => {
    //Handle delete action
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if(!confirmDelete) return;

    const deleteMovie = async() => {
      const rsp = await fetch("http://localhost:5000/delete.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: movieId}),
      });
      const result = await rsp.json();
      if(result.success){
        setMovies(movies.filter((movie) => movie.id !== movieId));
        setMessage(result.message);
      }else{
        console.error("Failed to delete movie:", result.error);
        setMessage(result.error);
      }
    };
    deleteMovie();
  };
  const FormSubmit = async (data) => {
    const rsp = await fetch("http://localhost:5000/create.php",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await rsp.json();
    if(result.success) {
      setMovies([...movies, {id: result.id, ...data}]);
      setMessage(result.message);
      setFormResetKey((prev) => prev + 1);
    }else{
      console.error("Failed to create movie:", result.error);
      setMessage(result.error);
    }
  };
  const handleEditSubmit = async (data) => {
    const rsp = await fetch("http://localhost:5000/edit.php", {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await rsp.json();
    if(result.Success) {
      setMovies(
        movies.map((movie) =>
          movie.id == data.id ? {...movie, ...data} : movie
        )
      );
      setEditMovie(null);
      setMessage(result.message);
    }else{
      console.error("Failed to update movie:", result.error);
      setMessage(result.error);
    }
  };
  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditMovie(null);
  };
  return(
    <>
      <div className="container mt-4">
        {message && (
          <div className="alert alert-info" role="alert">
            {message}
          </div>
        )}
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">Movie Management</div>
              <div className="card-body">
                {isEdit ? (
                  <FormEditMovie
                    movie = {editMovie}
                    onSubmit={handleEditSubmit}
                    onCancel={handleCancelEdit}
                  />
                ) : (
                  <FormMovie
                    onSubmit={FormSubmit}
                    resetTrigger={formResetKey}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <b>Filter</b>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Rate</th>
                  <th>Genre</th>
                  <th>Description</th>
                  <th style={{textAlign: "right"}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <TableRow
                    movie={movie}
                    key={movie.id}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieList;