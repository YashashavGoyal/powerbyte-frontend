# PowerByte - Smart Energy Monitoring System

PowerByte is a modern, responsive web application designed for real-time energy monitoring and management. It provides users with a comprehensive dashboard to track voltage, current, power usage, and energy consumption across various devices. 

Built with performance and user experience in mind, PowerByte leverages modern web technologies to deliver actionable insights into your energy usage patterns.

## 🔴 Live Demo & Access
**View the Live Dashboard:** [powerbyte.app](https://powerbyte.vercel.app/)

> 🔐 **Guest Access:** No signup required! Simply click the **"Guest Login"** button on the login screen to instantly access the full dashboard.

## 🚀 Features

-   **Real-Time Dashboard**: Monitor live metrics for Voltage (V), Current (A), Power (W), and Energy (kWh) with dynamic gauges and counters.
-   **Interactive Visualizations**:
    -   **Line Charts**: Track power consumption trends over time.
    -   **Bump Charts**: Visualize device usage rankings.
    -   **Speedometers**: Instant feedback on current load status.
-   **Device Management**: granular tracking of individual devices and their consumption status.
-   **Energy Calculator**: Estimate costs and savings based on usage patterns.
-   **Smart Alerts**: System notifications for abnormal reading or thresholds.
-   **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices using Tailwind CSS.
-   **Secure Authentication**: User login and registration powered by Firebase Auth.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/))
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Backend & Auth**: [Firebase](https://firebase.google.com/)
-   **Data Visualization**:
    -   [Chart.js](https://www.chartjs.org/) & [React Chartjs 2](https://react-chartjs-2.js.org/)
    -   [Nivo Charts](https://nivo.rocks/) (Bump, Line)
    -   [React D3 Speedometer](https://github.com/palerdot/react-d3-speedometer)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/YashashavGoyal/powerbyte-frontend.git
    cd powerbyte-frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal) to view the application.

## 📜 Scripts

-   `npm run dev`: Starts the development server including hot module replacement.
-   `npm run build`: Bundles the app into static files for production.
-   `npm run preview`: Preview the production build locally.

## 🔐 Configuration

This project relies on **Firebase** for backend services. Ensure you have a valid Firebase configuration.

The configuration usually resides in `src/firebase.js`. You may need to create a `.env` file or update the config object with your own Firebase project credentials if you are forking this repo.

```javascript
// Example src/firebase.js structure
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
