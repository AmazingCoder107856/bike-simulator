"use strict";

const baseURL = "http://server:1337/api/v1"; // If run via Docker compose
//const baseURL = "http://localhost:1337/api/v1";
const numUsers = 1300;                 // Should be greater than sum of maxRidesCity
const numBikesCity = [182, 1502, 316]; // [Karlskrona, Stockholm, Helsingborg]
const maxRidesCity = [120, 740, 140];  // Should be smaller than numBikesCity
const minRideDuration = 60;    // seconds
const minDistanceUpdate = 20;  // Min travel distance for bike to update database (m)
const batteryDischarge = 0.02; // Percentage points discharge per meter
const logRides = false;        // Write started and finished rides to console

module.exports = { baseURL, numUsers, numBikesCity, maxRidesCity,
    minRideDuration, minDistanceUpdate, batteryDischarge, logRides };
