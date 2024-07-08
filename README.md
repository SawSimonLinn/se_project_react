# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# WTWR (What to Wear)

WTWR (What to Wear) is a web application designed to help users decide what to wear based on the weather. The application fetches weather data from an external API and suggests appropriate clothing items from the user's wardrobe.

## Project Overview

This project is built using React for the front end. It leverages modern React features such as hooks and context to create a dynamic and responsive user interface. The application interacts with a backend server to manage user data and preferences.

## Key Features

- **Weather Data Integration:** Fetches real-time weather data to provide accurate clothing suggestions.
- **User Authentication:** Secure user login and registration functionality.
- **Personalized Wardrobe:** Users can add, update, and delete clothing items in their wardrobe.
- **React Hooks:** Utilizes `useState`, `useEffect`, `useContext`, and more.
- **Responsive Design:** Ensures the application works well on various screen sizes.

## Technologies Used

- **Front-end:** React, React Hooks, Context API, CSS
- **Back-end:** Node.js, Express (to be implemented)
- **Database:** MongoDB (to be implemented)
- **API:** OpenWeatherMap API for weather data
- **Tools:** Vite, JSON Server for mock API

## Setting Up the Project

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SawSimonLinn/se_project_react
   cd se_project_react
   ```

2. Install the dependencies:

```bash
npm install
```

3. Install JSON Server globally if you haven't already:

```bash
npm install -g json-server@^0
# or with sudo if necessary
sudo npm install -g json-server@^0
```

### Running the Project

1.  Start the React application:

```bash
npm run dev
```

2. In another terminal, start the JSON Server:

```bash
json-server --watch db.json --id _id --port 3001
```

### Configuration

- Ensure you have a db.json file in the root directory of your project to mock API responses.
- Configure your API keys and endpoints in a .env file.

### Project Structure

- `src/`: Contains all the source code for the React application.
  - `components/` : Reusable React components.
  - `contexts/`: Context API files for state management.
  - `hooks/`: Custom hooks used in the project.
  - `pages/`: Page components for different routes.
  - `services/`: API service files.
  - `styles/`: CSS files and styling.

### Figma Design

You can find the design layout for this project in the following Figma file: [Project Design on Figma](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR?node-id=311-433&t=b4cYtCWdvm2csvLg-0)

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

### License

This project is licensed under the MIT License.
