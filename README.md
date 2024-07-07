# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
