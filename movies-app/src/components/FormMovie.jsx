import React,{ useEffect, useState} from "react";

const currentYear = new Date().getFullYear();

export const FormMovie = ({onsubmit, resetTrigger}) =>{
    const emptyForm = {
      title: "",
      rate: "",
      year: "",
      genre: "",
      description: "",
    };
    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if(onsubmit){
        onsubmit(formData);
      }
    };
    useEffect(() => {
      setFormData(emptyForm);
    }, [resetTrigger]);
    return(
      <div className= "container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <input 
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="mb-2">
            <label htmlFor="rate" className="col-sm-2 col-form-label">Rate:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="rate"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.1"
              />
          </div>
          </div>
          <div className="mb-2">
            <label htmlFor="genre" className="col-sm-2 col-form-label">Genre:</label>
            <div className="col-sm-10">
              <select
              id="genre"
              name="genre"
              value={formData.genre}
              className="form-select"
              onChange={handleChange}
              >
                <option value="" style={{display: "none"}}>Select Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
              </select>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="year" className="col-sm-2 col-form-label">Year:</label>
            <div className="col-sm-10">
              <select
              id="year"
              name="year"
              value={formData.year}
              className="form-select"
              onChange={handleChange}
              >
                <option value="" style={{display: "none"}}>Select Year</option>
                {Array.from(
                  {length: currentYear - 1990},
                  (_, i) => currentYear - i
                ).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
            <div className="col-sm-10">
              <textarea
              className="form-control"
              id="description"
              name="description"
              rowss="3"
              value={formData.description}
              onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end"}}></div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
}