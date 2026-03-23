import React from 'react';
import './TopPicks.css';

const TopPicks = ({ games }) => {
    return (
        <div className="top-picks">
            <div className="header">
                <i className="flame-icon">🔥</i>
                <span className="label">TRENDING</span>
            </div>
            <div className="grid">
                {games.slice(0, 8).map((game, index) => (
                    <div key={index} className="game-card">
                        <img src={game.image} alt={game.title} className="game-image" />
                        <h3 className="game-title">{game.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPicks;
