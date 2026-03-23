import React from 'react';
import './CategoryQuickJump.css';

const CategoryQuickJump = () => {
    const categories = [
        { name: 'Action', color: '#FF5733', icon: '⚔️' },
        { name: 'Puzzle', color: '#33C3FF', icon: '🧩' },
        { name: 'Strategy', color: '#75FF33', icon: '♟️' },
        { name: 'Racing', color: '#FF33F6', icon: '🏎️' },
        { name: 'Sports', color: '#FFDA33', icon: '⚽' },
        { name: 'Arcade', color: '#FFC300', icon: '🕹️' },
        { name: 'Adventure', color: '#33FF57', icon: '🌍' },
    ];

    return (
        <div className='quick-jump-container'>
            {categories.map((category, index) => (
                <button key={index} className='quick-jump-button' style={{ backgroundColor: category.color }}>
                    {category.icon} {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryQuickJump;