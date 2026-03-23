import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                placeholder="SEARCH_MODULES" 
                style={{ flex: 1, padding: '10px' }}
            />
            <button onClick={handleClear} style={{ marginLeft: '5px' }}>
                {searchTerm ? <X /> : <Search />}
            </button>
        </div>
    );
};

export default SearchBar;