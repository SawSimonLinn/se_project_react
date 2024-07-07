# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Overview

This project is a React application built using Vite. It leverages modern React features such as hooks and context to create a dynamic and responsive user interface. The project also includes a JSON server for handling mock API requests.

## Figma File

You can find the design layout for this project in the following Figma file:
Project Design on [Figma 1](https://www.figma.com/design/JELwiE1GnlYDgJTcphpJOH/Sprint-11%3A-WTWR?node-id=311-433&t=GrK1sNfUyyYSi7hW-0) [Figma 2](https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR?node-id=311-433&t=b4cYtCWdvm2csvLg-0)

## React Features Used

This project utilizes several React features, including but not limited to:

- **React Hooks**
  - `useEffect`
  - `useState`
  - `useContext`
  - `useReducer`
- **Contexts**
  - Context API for state management

## Setting Up JSON Server

To use a JSON server for your project, follow these steps:

### Install JSON Server

Install the `json-server` package globally using npm. Note that on some systems, you may have to preface this command with `sudo` to run it with elevated permissions.

```bash
npm install -g json-server@^0
```

or with sudo if necessary

```bash
sudo npm install -g json-server@^0
```

## Running JSON Server

In the first terminal, you can now run your React app.

In the second terminal, start the JSON server with the following command:

```bash
json-server --watch db.json --id _id --port 3001
```
