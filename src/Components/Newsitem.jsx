import React from "react";
import placeholderImage from "../assets/default_image.svg";
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      {src ? ( // Check if src is provided
        <img src={src} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="..." />
      ) : (
        <img src={placeholderImage} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="Placeholder" /> // Display placeholder image
      )}
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Delve into the world of news with our latest updates, bringing you timely information and insights."}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
