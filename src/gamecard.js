import React from 'react';

export default function GameCard({ game }) {
  const { title, imageUrl, tags } = game;

  return (
    <div className="card" data-title={title.toLowerCase()}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag" data-tag={tag.toLowerCase()}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}