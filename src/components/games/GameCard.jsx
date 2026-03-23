import React from 'react';
import './GameCard.css'; // Assuming we'll create a separate CSS file for styles

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="image-container">
                <img src={game.image} alt={game.title} />
                <button className="play-button">Play</button>
            </div>
            <div className="game-info">
                <span className="category-badge">{game.category}</span>
                <h3 className="game-title">{game.title}</h3>
                <p className="players-count">{game.players} players</p>
                <p className="rating">Rating: {game.rating}</p>
            </div>
        </div>
    );
};

export default GameCard;