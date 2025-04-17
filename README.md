# WTWR (What to Wear)

A React-based web application that provides personalized clothing suggestions based on real-time weather data. Users can manage their wardrobe and receive recommendations tailored to their local weather conditions.

![WTWR Screenshot](https://media.licdn.com/dms/image/v2/D562DAQGRreS2J6RK1Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734413100708?e=1740114000&v=beta&t=rQa89QdEx3CV00Y1SNQiV5nUhyJRfMXYL49pWCThuUQ)

## Description

WTWR enables users to:

- Receive clothing suggestions based on current weather.
- Add, edit, and delete clothing items in their virtual wardrobe.
- View detailed weather information for their location.

## Features

- **Weather-Based Recommendations:** Get outfit suggestions that match the day's weather.
- **Wardrobe Management:** Easily manage your clothing items within the app.
- **Responsive Design:** Enjoy a seamless experience across all devices.

<!-- ![Wardrobe Management GIF](https://example.com/wardrobe-management.gif) -->

## Live Demo

Experience the live version of the project here: [WTWR Live Demo](https://wtwrapp.jumpingcrab.com/)

## Backend Repository

This project uses a separate backend built with **Node.js**, **Express.js**, and **MongoDB**. I also used **Postman** to test APIs and **JWT** for authentication. [WTWR Backend Repo](https://github.com/SawSimonLinn/se_project_express)

Features include:

-  **RESTful API** structure using Express  
-  **MongoDB** for database and data models  
-  **Postman** for endpoint testing  
-  **JWT Authentication** for secure login  
-  Clear separation of controllers, routes, and middlewares  
-  Deployed for smooth integration with the frontend

## Demo Video

For a comprehensive walkthrough of the application's features, watch the demo video:

[![WTWR Demo Video](https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg)](https://example.com/demo-video.mp4)

## Deployment and System Requirements

To run this project locally, ensure you have the following:

- **Node.js:** Version 14.x or higher
- **npm:** Version 6.x or higher
- **React:** Version 17.x or higher
- **Vite:** Version 2.x or higher

**Deployment Instructions:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SawSimonLinn/se_project_react.git
   cd se_project_react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview the production build:

   ```bash
   npm run preview
   ```

### Future Improvements

- Enhance Recommendation Algorithm: Improve the clothing suggestion algorithm using machine learning to provide more personalized recommendations.
- User Authentication: Implement OAuth2.0 for secure and seamless user login experiences.
- Social Sharing: Allow users to share their outfits and weather updates on social media platforms.
