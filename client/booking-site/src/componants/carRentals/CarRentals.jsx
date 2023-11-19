import React, { useState } from 'react';
import './carRentals.css';

const CarRentals = () => {
    const [filterText, setFilterText] = useState('');
    const [sortType, setSortType] = useState('name');

    const carRentals = [
        { name: 'City Car Rentals', location: 'Downtown', description: 'Affordable car rentals in the city.', models: ['Sedan', 'SUV', 'Van'], priceRange: '$50 - $100', rating: 4.5 },
        { name: 'Airport Car Hire', location: 'Airport Terminal', description: 'Convenient car rental service at the airport.', models: ['Sedan', 'Luxury'], priceRange: '$70 - $150', rating: 4.2 },
        { name: 'Family Auto Rentals', location: 'Suburb Area', description: 'Spacious family-friendly cars for rent.', models: ['SUV', 'Van'], priceRange: '$60 - $120', rating: 4.7 },
    ];

    const filteredCarRentals = carRentals.filter((rental) => {
        return rental.name.toLowerCase().includes(filterText.toLowerCase()) ||
            rental.location.toLowerCase().includes(filterText.toLowerCase());
    });

    const sortedCarRentals = filteredCarRentals.sort((a, b) => {
        if (sortType === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortType === 'location') {
            return a.location.localeCompare(b.location);
        }
        return 0;
    });

    return (
        <div className="car-rentals-container">
            <h2>Car Rentals</h2>
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
            <ul className="car-rentals-list">
                {sortedCarRentals.map((rental, index) => (
                    <li key={index} className="rental-item">
                        <h3>{rental.name}</h3>
                        <p>Location: {rental.location}</p>
                        <p>Description: {rental.description}</p>
                        <p>Available Models: {rental.models.join(', ')}</p>
                        <p>Price Range: {rental.priceRange}</p>
                        <p>User Rating: {rental.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarRentals;
