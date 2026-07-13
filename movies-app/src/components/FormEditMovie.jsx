import React, {useEffect, useState} from "react";
const currentYear = new Date().getFullYear();

export const FormEditMovie =({movie, onSubmit, onCancel}) => {
    const emptyForm = {
        id:"",
        title:"",
        rate:"",
        year:"",
        genre:"",
        description:"",
    };
    const [formData, setFormData] = useState(movie || emptyForm);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSubmit) {
            onSubmit?.(formData);
        }
    };
    const handleCancel = () => {
        if(onCancel){
            onCancel?.(true);
        }
    };
    useEffect(() => {
        setFormData(movie || emptyForm);
    }, [movie]);

    return(
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id}/>
                <div className="row mb-2">
                    <label htmlFor="title" className="col-sm-2 col-form-label">
                        Title
                    </label>
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
                <div className="row mb-2">
                    <label htmlFor="rate" className="col-sm-2 col-form-label">
                        Rate
                    </label>
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
                <div className="row mb-2">
                    <label htmlFor="genre" className="col-sm-2 col-form-label">
                        Genre
                    </label>
                    <div className="col-sm-10">
                        <select
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            className="form-select"
                            onChange={handleChange}
                        >
                            <option value="" style={{display: "none"}}>
                                Select Genre
                            </option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="year" className="col-sm-2 col-form-label">
                        Year
                    </label>
                    <div className="col-sm-10">
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            className="form-select"
                            onChange={handleChange}
                        >
                            <option value="" style={{display: "none"}}>
                                Select Year
                            </option>
                            {Array.from(
                                {length: currentYear-1990},
                                (_, i) => currentYear - i
                            ).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="description" className="col-sm-2 col-form-label">
                        Description
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button type="submit" className="btn btn-primary me-2">
                        Update
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormEditMovie;