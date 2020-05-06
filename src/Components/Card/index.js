import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  id,
  title,
  year,
  description,
  imageURL
}) {
  return (
    <div key={id} className="card">
      <img className="card-img-top" src={imageURL[0].url} alt="Movie poster" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{year}</small>
        </p>
      </div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.array,
};
