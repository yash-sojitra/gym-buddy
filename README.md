# Gym Buddy

Welcome to the Workout Tracker project! This project is a full-stack application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to track their workouts by adding different exercises and monitoring their progress over time.

## Project Overview

- The frontend code is located in the `frontend` folder.
- The backend code is located in the `backend` folder.
- MongoDB Atlas is used to host the database.

## Functionality

- Users can add different workouts and exercises to their tracker.
- The application provides a user-friendly interface for logging workouts.
- State management is handled using React Context API and useReducer hook.
- MongoDB with Mongoose is used for database integration.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/workout-tracker.git

### Setup Backend:

2. **Navigate to the backend folder:**
   ```bash
   cd gymbuddy/backend
   
3. **Install Dependencies:**
   ```bash
   npm install
   
4. **Set up environment variables:** 

   Create a `.env` file and add your MongoDB connection string.

6. **Run Backend Server for devlopment:**
   ```bash
   npm run dev 

  ### Setup Frontend:
  
1. **Navigate to the frontend folder:**
   ```bash
   cd ../frontend
   
2. **Install Dependencies:**
   ```bash
   npm install

3. **Run Frontend for devlopment:**
   ```bash
   npm start 

### Setting up MomgoDB Atlas:

1. Sign up/Login to MongoDB Atlas: MongoDB Atlas
2. Create a new cluster and configure your database settings.
3. Obtain your connection string:
      - Go to your cluster dashboard.
      - Click on "Connect" button.
      - Select "Connect your application".
      - Copy the connection string provided.
4. Add the connection string to your backend `.env` file:
     ```bash
     MONGODB_URI=your-connection-string
5. Ensure your IP address is whitelisted in MongoDB Atlas.
6. You're ready to use MongoDB Atlas for your project!
