/*
=====================================================
AI-Based Smart Energy Management System
Dashboard JavaScript
=====================================================
*/

// =============================
// Backend API Configuration
// =============================

const API_BASE_URL = "http://localhost:5000";


// =============================
// Dashboard Elements
// =============================

const currentElement = document.getElementById("current");
const voltageElement = document.getElementById("voltage");
const powerElement = document.getElementById("power");
const energyElement = document.getElementById("energy");

const relayStatusElement = document.getElementById("relayStatus");
const energyStatusElement = document.getElementById("energyStatus");

const predictedPowerElement =
    document.getElementById("predictedPower");

const predictedEnergyElement =
    document.getElementById("predictedEnergy");

const recommendationElement =
    document.getElementById("recommendation");

const connectionDot =
    document.getElementById("connectionDot");

const connectionText =
    document.getElementById("connectionText");

const lastUpdateElement =
    document.getElementById("lastUpdate");

const controlMessageElement =
    document.getElementById("controlMessage");


// =============================
// Update Connection Status
// =============================

function setConnectionStatus(connected) {

    if (connected) {

        connectionText.textContent = "Connected";
        connectionDot.style.background = "#16a34a";

    } else {

        connectionText.textContent = "Disconnected";
        connectionDot.style.background = "#dc2626";
    }
}


// =============================
// Update Dashboard
// =============================

function updateDashboard(data) {

    if (!data) {
        return;
    }

    // Sensor values
    currentElement.textContent =
        Number(data.current || 0).toFixed(2);

    voltageElement.textContent =
        Number(data.voltage || 230).toFixed(2);

    powerElement.textContent =
        Number(data.power || 0).toFixed(2);

    energyElement.textContent =
        Number(data.energy || 0).toFixed(4);


    // Relay status
    if (data.relay !== undefined) {

        relayStatusElement.textContent =
            String(data.relay).toUpperCase();

    }


    // Energy status
    if (data.status) {

        energyStatusElement.textContent =
            data.status;

    }


    // AI prediction
    if (data.predicted_power !== undefined) {

        predictedPowerElement.textContent =
            Number(data.predicted_power).toFixed(2);

    }

    if (data.predicted_energy !== undefined) {

        predictedEnergyElement.textContent =
            Number(data.predicted_energy).toFixed(4);

    }


    // AI recommendation
    if (data.recommendation) {

        recommendationElement.textContent =
            data.recommendation;

    }


    // Last update
    lastUpdateElement.textContent =
        new Date().toLocaleTimeString();
}


// =============================
// Get Latest Energy Data
// =============================

async function fetchEnergyData() {

    try {

        const response =
            await fetch(`${API_BASE_URL}/api/latest`);

        if (!response.ok) {
            throw new Error("Server response error");
        }

        const data = await response.json();

        updateDashboard(data);

        setConnectionStatus(true);

        // Update chart if function exists
        if (typeof updateCharts === "function") {
            updateCharts(data);
        }

    } catch (error) {

        console.error(
            "Unable to fetch energy data:",
            error
        );

        setConnectionStatus(false);
    }
}


// =============================
// Manual Relay Control
// =============================

async function controlRelay(state) {

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/relay`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    state: state
                })
            }
        );


        if (!response.ok) {
            throw new Error("Relay control failed");
        }


        const result =
            await response.json();


        relayStatusElement.textContent =
            state;


        controlMessageElement.textContent =
            result.message ||
            `Relay switched ${state}.`;


        setConnectionStatus(true);


    } catch (error) {

        console.error(
            "Relay control error:",
            error
        );

        controlMessageElement.textContent =
            "Unable to control relay.";

        setConnectionStatus(false);
    }
}


// =============================
// Get AI Prediction
// =============================

async function fetchPrediction() {

    try {

        const response =
            await fetch(`${API_BASE_URL}/api/prediction`);

        if (!response.ok) {
            throw new Error("Prediction API error");
        }

        const data =
            await response.json();


        if (data.predicted_power !== undefined) {

            predictedPowerElement.textContent =
                Number(data.predicted_power).toFixed(2);

        }


        if (data.predicted_energy !== undefined) {

            predictedEnergyElement.textContent =
                Number(data.predicted_energy).toFixed(4);

        }


        if (data.recommendation) {

            recommendationElement.textContent =
                data.recommendation;

        }

    } catch (error) {

        console.error(
            "Prediction error:",
            error
        );
    }
}


// =============================
// Start Dashboard
// =============================

function startDashboard() {

    // Get initial data
    fetchEnergyData();

    // Get AI prediction
    fetchPrediction();

    // Update sensor data every 5 seconds
    setInterval(fetchEnergyData, 5000);

    // Update AI prediction every 30 seconds
    setInterval(fetchPrediction, 30000);
}


// =============================
// Start Application
// =============================

document.addEventListener(
    "DOMContentLoaded",
    startDashboard
);