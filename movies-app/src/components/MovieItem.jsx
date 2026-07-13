import "./MovieItem.css";
const MovieItem = (props) => {
  return(
    <>
      <article className="movie-card" aria-label="Movie card">
        <div className="poster" id="poster">
          <img
            id="posterImg"
            src={props.thumnail}
            alt="Poster: Movie poster"
          />
        </div>
        <div>
          <div className="info">
            <div className="title-row">
              <h3 className="movie-title" id="title">
                {props.title}
              </h3>
              <div className="year-pill" id="year">
                {props.year}
              </div>
            </div>
            <div className="meta">
              <div className="genres" id="genres">
                {props.genre}
              </div>
              <div className="rating" aria-label="Rating">
                <div className="stars" id="stars" aria-hidden="true"></div>
                <div className="num" id="ratingNum">
                  {props.rate}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="badge" id="runtime">
              {props.duration}
            </div>
            <button onClick={view} className="watch-btn" id="watchBtn">
              Watch
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
export {MovieItem};
