# AI-BASED-SMART-ENERGY-MANAGEMENT-SYSTEM
# AI-Based Smart Energy Management System

An AI-powered system designed to monitor, predict, optimize, and reduce electricity consumption in classrooms and other school spaces.

## 📌 Project Overview

The **AI-Based Smart Energy Management System** uses sensors, data collection, machine learning, and automated control to reduce unnecessary electricity consumption.

The system considers factors such as:

* 👥 Classroom occupancy
* 🌡️ Temperature
* 💡 Natural-light conditions
* ⚡ Electricity consumption
* 🕐 Time and usage patterns

Based on these conditions, the system can recommend or automatically control electrical appliances such as **fans and lights**.

## 🎯 Objectives

1. Monitor electricity usage in real time.
2. Detect whether a classroom is occupied.
3. Reduce electricity consumption when rooms are empty.
4. Predict future energy requirements using an AI/ML model.
5. Optimize the operation of electrical appliances.
6. Estimate energy and financial savings.
7. Provide a dashboard for monitoring the system.

## 🏗️ System Architecture

```text
Sensors
   ↓
ESP32 / Microcontroller
   ↓
Data Collection
   ↓
Database / CSV
   ↓
AI/ML Prediction Model
   ↓
Energy Optimizer
   ↓
Appliance Control
   ↓
Dashboard
```

## 🔧 Hardware Components

Typical hardware used in the prototype includes:

* ESP32 microcontroller
* DHT22 temperature and humidity sensor
* PIR motion/occupancy sensors
* LDR/light sensors
* Relays or suitable switching modules
* LEDs for representing classroom lights
* DC fans or suitable fan-load representation
* Resistors
* Breadboard and jumper wires
* Power supply
* Prototype board/foam board/acrylic structure

> **Safety:** For a school prototype, use low-voltage loads or properly isolated relay modules. Do not connect mains electricity directly to the prototype without qualified adult supervision.

## 💻 Software

* Python
* Flask
* Flask-CORS
* Machine Learning
* HTML
* CSS
* JavaScript
* CSV/database storage
* Arduino IDE

## 📂 Project Structure

```text
AI-Based Smart Energy Management System/
│
├── main.ino
├── data_collection.py
├── database.py
├── model.py
├── train.py
├── predict.py
├── energy_optimizer.py
├── api.py
├── energy_data.csv
│
├── dashboard/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── README.md
```

## ⚙️ How It Works

### 1. Data Collection

Sensors collect information such as temperature, occupancy, and light conditions.

### 2. Data Storage

The collected information is stored in a CSV file or database for analysis and model training.

### 3. AI Prediction

The machine-learning model learns from historical energy data and predicts expected energy consumption.

### 4. Energy Optimization

The optimizer uses sensor conditions and predicted demand to determine whether appliances should remain ON, be switched OFF, or have their operation adjusted.

### 5. Automated Control

The microcontroller can control prototype appliances through appropriate switching hardware.

### 6. Dashboard

The dashboard displays important information such as:

* Current occupancy
* Temperature
* Energy consumption
* Predicted consumption
* Appliance status
* Estimated energy savings
* Estimated cost savings

## 🚀 Installation

Install Python and then install the required packages:

```bash
py -m pip install flask flask-cors pandas numpy scikit-learn
```

If additional packages are required by the model, install them according to the project's Python files.

## ▶️ Running the Project

### Train the AI Model

```bash
py train.py
```

### Run the Prediction System

```bash
py predict.py
```

### Start the API Server

```bash
py api.py
```

The API can then provide data to the dashboard.

### Open the Dashboard

Open:

```text
dashboard/index.html
```

in a web browser, or serve the dashboard through the project's web server.

## 📊 Energy-Saving Principle

The basic idea is simple:

```text
Energy Consumed = Power × Operating Time
```

If an appliance is unnecessarily operating in an empty classroom, reducing its operating time reduces energy consumption.

For example, if a 60 W fan operates for 8 hours:

```text
Energy = 60 × 8
       = 480 Wh
       = 0.48 kWh
```

The actual savings depend on appliance ratings, operating schedules, occupancy, electricity tariffs, and system performance.

## 🤖 AI Component

The AI component can use historical data containing variables such as:

```text
temperature
humidity
occupancy
light_level
hour
day
fan_status
light_status
energy_consumption
```

The model learns relationships between these variables and energy consumption.

The prediction can then be used by the optimization system to make more efficient decisions.

## 💰 Expected Benefits

* Reduced unnecessary electricity consumption
* Lower electricity costs
* Better energy monitoring
* Automated appliance management
* Data-driven decision making
* Reduced environmental impact
* Improved awareness of energy conservation

## 🧪 Prototype Testing

The prototype should be tested under different conditions:

| Condition                | Expected Behaviour                      |
| ------------------------ | --------------------------------------- |
| Classroom occupied       | Required appliances remain available    |
| Classroom empty          | Unnecessary appliances are switched off |
| High temperature         | Fan operation may increase              |
| Sufficient natural light | Artificial lighting can be reduced      |
| Low natural light        | Lighting can be activated               |
| Changing occupancy       | System responds to new sensor data      |

## 📈 Future Improvements

Possible future developments include:

* IoT-based remote monitoring
* Cloud data storage
* More advanced machine-learning models
* Solar-power integration
* Mobile application
* Real-time electricity meters
* Multi-classroom optimization
* Anomaly detection
* Automated monthly energy reports

## 🌱 Conclusion

The **AI-Based Smart Energy Management System** combines sensors, automation, data analysis, and artificial intelligence to address unnecessary electricity consumption.

Instead of relying entirely on fixed schedules or human attention, the system uses real-time conditions and historical data to make smarter energy-management decisions.

The larger goal is to demonstrate how intelligent technology can help schools reduce energy waste while maintaining a suitable learning environment.

## 👥 Project Type

**AI + IoT + Energy Management + Machine Learning**

**Application:** Schools, classrooms, offices, and other buildings

**Primary Goal:** Reduce unnecessary energy consumption through intelligent monitoring and control.
