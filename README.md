# 🎮 Pokedex

A responsive **Pokedex Web App** built with **React** and **Vite**. The app uses the public **PokeAPI** to display Pokemon cards, detail pages, pagination, search, loading states, and previous/next Pokemon navigation.

---

## ✨ Features

- Browse Pokemon in paginated lists
- View Pokemon details including:
  - Name
  - Image
  - Weight
  - Height
  - Type
- Search Pokemon by name
- Handles invalid Pokemon searches with a clear error message
- Previous and next Pokemon preview cards on the detail page
- Responsive search UI for mobile screens
- Loading animation while API data is being fetched
- Client-side routing with React Router

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| React | Frontend UI |
| Vite | Build Tool |
| React Router | Routing |
| Axios | API Requests |
| React Icons | Icons |
| CSS | Styling |
| PokeAPI | Pokemon Data |

---

## 📁 Project Structure

```text
pokedex/
|-- public/
|   `-- favicon.svg
|-- src/
|   |-- assets/
|   |   `-- pikachu-running.gif
|   |-- components/
|   |   |-- footer/
|   |   |-- loading/
|   |   |-- pokedex/
|   |   |-- pokemon/
|   |   |-- pokemonDetails/
|   |   |-- pokemonList/
|   |   `-- search/
|   |-- routes/
|   |   `-- costumRoutes.jsx
|   |-- App.jsx
|   |-- app.css
|   `-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package.json
`-- vite.config.js
````

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure Node.js and npm are installed on your system.

```bash
node --version
npm --version
```

### 📥 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/anonymousd3vil-ops/pokedex.git
cd pokedex
npm install
```

### ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

### 🏃 Development Server

```bash
npm run dev
```

Runs the app in development mode.

### 🏗️ Production Build

```bash
npm run build
```

Builds the app for production.

### 👀 Preview Build

```bash
npm run preview
```

Previews the production build locally.

### 🔍 Lint Code

```bash
npm run lint
```

Runs ESLint checks.

---

## 🌐 API

This project uses **PokeAPI**:

```text
https://pokeapi.co/api/v2/pokemon
```

The app fetches Pokemon list data for the main Pokedex page and Pokemon detail data for individual detail pages.

---

## 📄 Main Pages

### 🏠 Home Page

Displays a list of Pokemon cards with pagination controls.

### 🔎 Pokemon Detail Page

Displays detailed information for a selected Pokemon. It also shows previous and next Pokemon cards when available.

### 🔍 Search

Users can search by Pokemon name.

✅ Valid searches navigate to that Pokemon's detail page.

❌ Invalid searches show an error message.

---

## 📦 Build

Create a production-ready build:

```bash
npm run build
```

The output will be generated inside the `dist` folder.

---

## 🚧 Future Improvements

* Add search suggestions while typing
* Add filtering by Pokemon type
* Add more Pokemon stats and abilities
* Improve error handling for network failures
* Add unit and component tests

---

## 👨‍💻 Author

**Vivek Patel**

🐙 GitHub: https://github.com/anonymousd3vil-ops

💼 LinkedIn: https://linkedin.com/in/vivek-pat3l

---

## 🙏 Acknowledgements

* 🐱 Data provided by [PokeAPI](https://pokeapi.co/)
* ⚛️ Built with [React](https://react.dev/)
* ⚡ Powered by [Vite](https://vite.dev/)

---

<div align="center">

### ⭐ If you like this project, don't forget to star the repository! ⭐

</div>
