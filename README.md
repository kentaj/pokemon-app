# Dentmon

A web application built with React and TypeScript for exploring Generation 1 Pokémon.  
Features a Pokémon card design with type-based color coding and comprehensive caching.

**Live demo:** [https://pokemon-app-lemon-eight.vercel.app/](https://pokemon-app-lemon-eight.vercel.app/)

## Tech Stack

- **Vite** - Build tool and dev server
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching

## Features

- Browse all 151 Generation 1 Pokémon
- View detailed stats, types, and abilities for each Pokémon
- Efficient caching with TanStack Query (5-minute stale time)
- Pokémon card-inspired design with type-based gradients
- Keyboard navigation and accessibility improvements (WCAG 2.1)
- Prefetch on hover for instant page transitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/kentaj/pokemon-app.git
cd pokemon-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## API

This project uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

## License

MIT