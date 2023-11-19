import React from 'react';
import './airportTaxi.css'
import axios from 'axios';

export const AirportTaxi = () => {
    document.getElementById("taxiForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const pickupLocation = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        const apiUrl = "/";  // Replace with your actual API URL
        const requestData = {
            name: name,
            pickupLocation: pickupLocation,
            destination: destination,
            date: date
        };

        // Make a POST request using axios
        axios.post(apiUrl, requestData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.status === 200) {
                    document.getElementById("status").textContent = "Taxi booked successfully!";
                } else {
                    document.getElementById("status").textContent = "An error occurred while booking the taxi.";
                }
            })
            .catch(error => {
                console.error("An error occurred:", error);
                document.getElementById("status").textContent = "An error occurred while booking the taxi.";
            });
    });

    return (
        <div className='AirportTaxi'>
            <h2>Book Airport Taxi</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Pickup Location:</label>
                    <input
                        type="text"
                        name="pickupLocation"
                        value={this.state.pickupLocation}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Drop-off Location:</label>
                    <input
                        type="text"
                        name="dropoffLocation"
                        value={this.state.dropoffLocation}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Passengers:</label>
                    <input
                        type="number"
                        name="passengers"
                        value={this.state.passengers}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <button type="submit">Book Taxi</button>
            </form>
        </div>
    );
}

export default AirportTaxi;
