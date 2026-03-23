import React from 'react';
import './GameGrid.css'; // Assuming you have some CSS for styling

const GameGrid = ({ games, showCategoryDividers }) => {
    const categories = {};

    // Group games by category
    games.forEach(game => {
        const category = game.category || 'Uncategorized';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(game);
    });

    return (
        <div className="game-grid">
            {Object.keys(categories).map(category => (
                <div key={category} className="category">
                    {showCategoryDividers && <h2>{category}</h2>}
                    <div className="games">
                        {categories[category].map((game, index) => (
                            <div key={index} className="game-item">
                                <h3>{game.name}</h3>
                                {/* Render other game details here */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GameGrid;
