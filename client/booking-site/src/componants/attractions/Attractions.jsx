// Attractions.js
import React, { useState } from 'react';
import './attractions.css';

const Attractions = () => {
    const [filterText, setFilterText] = useState('');
    const [sortType, setSortType] = useState('name');

    const attractions = [
        { name: 'Museum of Art', location: 'City Center', description: 'A famous art museum with a vast collection.', image: '/art_museum.jpg' },
        { name: 'Botanical Gardens', location: 'Botanical Park', description: 'Beautiful gardens with a variety of plants and flowers.', image: '/botanical_gardens.jpg' },
        { name: 'Historical Monument', location: 'Old Town', description: 'An important historical site with rich heritage.', image: '/historical_monument.jpg' },
    ];

    const filteredAttractions = attractions.filter((attraction) => {
        return attraction.name.toLowerCase().includes(filterText.toLowerCase()) ||
            attraction.location.toLowerCase().includes(filterText.toLowerCase());
    });

    const sortedAttractions = filteredAttractions.sort((a, b) => {
        if (sortType === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortType === 'location') {
            return a.location.localeCompare(b.location);
        }
        return 0;
    });

    return (
        <div className="attractions-container">
            <h2>Attractions</h2>
            <div className="filter-and-sort">
                <input
                    type="text"
                    placeholder="Filter by name or location"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <label>Sort by:</label>
                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                </select>
            </div>
            <ul className="attractions-list">
                {sortedAttractions.map((attraction, index) => (
                    <li key={index} className="attraction-item">
                        <img src={attraction.image} alt={`${attraction.name}`} />
                        <h3>{attraction.name}</h3>
                        <p>Location: {attraction.location}</p>
                        <p>{attraction.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Attractions;
