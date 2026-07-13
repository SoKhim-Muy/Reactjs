import React from "react";
export const TableRow = ({movie, onEdit, onDelete}) => {
  const handleEdit = () => {
    onEdit(movie);
  };
  const handleDelete = () => {
    onDelete(movie.id);
  };
  return(
    <>
      <tr>
        <td>{movie.id}</td>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td>{movie.rate}</td>
        <td>{movie.genre}</td>
        <td>{movie.description}</td>
        <td>
          <div
            style={{
              width:"100%",
              display:"flex",
              gap: "1rem",
              justifyContent:"flex-end",
              alignment:"center",
            }}
          >
            <button className="btn btn-sm btn-primary" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
