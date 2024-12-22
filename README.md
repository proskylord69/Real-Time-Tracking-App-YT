# Real-Time Tracking App

This repository contains a real-time location tracking application built with Node.js, Express, Socket.IO, and Leaflet.js.

## Steps to Run the Application

### 1. Install Dependencies
To install the required dependencies, run the following command:
```bash
npm install
# or
npm i
```

### 2. Start the Server
To start the server, use:
```bash
nodemon server.js
```

### 3. Open the Application
In your browser, navigate to:
```
http://localhost:3000
```

This will open the real-time tracking application.

## Features
- Real-time location tracking using the Geolocation API.
- Display user locations on an interactive map powered by Leaflet.js.
- Dynamically update markers for connected users.
- Remove markers when a user disconnects.

## Prerequisites
- Node.js installed on your system.
- `npm` or `yarn` package manager.

## Folder Structure
- **server.js**: Main server file for handling Socket.IO and Express logic.
- **public/**: Contains static assets (HTML, CSS, and client-side JavaScript).
- **views/**: Contains EJS templates for rendering the application.

## Notes
- Ensure geolocation is enabled in your browser.
- Use HTTPS or `http://localhost` to avoid geolocation errors.
- For deployment, use a secure tunnel like [ngrok](https://ngrok.com/) or host it on a secure server.

Feel free to fork or clone the repository to build upon this project!
