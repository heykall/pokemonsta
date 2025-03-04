# React Vite Pokémon App 

This is a **React Vite Application** that utilizes the **Pokémon API v2** to fetch and display Pokémon data. The application provides features like searching for Pokémon, viewing details, and managing favorites.

## Features

- Fetch Pokémon data from **Pokémon API v2**.
- Search functionality to find Pokémon by name.
- Favorite Pokémon feature.
- Infinity scroll

## Technologies Used

- **Vite**: Fast build tool for React applications.
- **React Router**: For handling client-side routing.
- **Redux Toolkit**: For state management (favorites, search).
- **React Query**: For efficient data fetching and caching.
- **Tailwind CSS**: For styling the UI.

## Installation and Running the Project

Follow these steps to set up and run the project:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/heykall/pokemonsta.git
cd pokemonsta
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Setup Environment Variables

Create a **.env** file in the project root and add the following:

```sh
VITE_API_URL=https://pokeapi.co/api/v2
```

### 4️⃣ Start the Development Server

```sh
npm run dev
```

- The app will be available at [**http://localhost:5173/**](http://localhost:5173/) (default Vite port).

### 5️⃣ Build for Production

To create an optimized production build:

```sh
npm run build
```

### 6️⃣ Preview Production Build

```sh
npm run preview
```

- This runs a local server to preview the production build.