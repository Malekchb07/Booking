import React, { useState } from 'react';
import './flights.css';

const Flights = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    // You can replace the data below with your flight information
    const flights = [
        {
            id: 1,
            airline: 'Airline A',
            departure: 'City A',
            destination: 'City B',
            departureTime: '10:00 AM',
            returnTime: '2:00 PM',
            price: '$250',
        },
        {
            id: 2,
            airline: 'Airline B',
            departure: 'City A',
            destination: 'City C',
            departureTime: '11:00 AM',
            returnTime: '3:00 PM',
            price: '$280',
        },
        // Add more flight data
    ];

    const filteredFlights = flights.filter((flight) => {
        return (
            flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
            flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
            flight.departureTime.includes(departureDate) &&
            flight.returnTime.includes(returnDate)
        );
    });

    return (
        <div className="flights-container">
            <h2>Find Flights</h2>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Departure City"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Destination City"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Departure Date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Return Date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            </div>
            <div className="flight-list">
                {filteredFlights.length > 0 ? (
                    filteredFlights.map((flight) => (
                        <div key={flight.id} className="flight-item">
                            <h3>{flight.airline}</h3>
                            <p>Departure: {flight.departure}</p>
                            <p>Destination: {flight.destination}</p>
                            <p>Departure Time: {flight.departureTime}</p>
                            <p>Return Time: {flight.returnTime}</p>
                            <p>Price: {flight.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No flights match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default Flights;
