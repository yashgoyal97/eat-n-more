# eat-n-more: Phase 1

## Code setup
### Setup and configure redux store
* `npm install @reduxjs/toolkit`
* `npm install react-redux`
* `import { configureStore } from "@reduxjs/toolkit"`
### Setup tailwindcss
* `npm install -D tailwindcss`
* `npx tailwindcss init`
* Update tailwind config: `content: ["./src/**/*.{js,jsx,ts,tsx}"]`
* Configure index.css file for tailwind
### Setup and configure react-router
* `npm install react-router-dom`
* `import { createBrowserRouter, RouterProvider } from "react-router-dom"`

## Design app template
### Header
* App Logo
* Navigation/Route Links
    1. Search (Expandable on click)
    2. Cart Page
    3. Yash Page (Developer's Profile)
### Main
* Fetch data using `createAsyncThunk`
* Populate 
    1. What's on your mind?
    2. Top restaurant chains
        * Restaurant cards
    3. Restaurants with online food delivery
        * Heading
        * Filter Widget (Data used from main API)
        * Restaurant cards


# Phase 2
## Restaurant Page
## Cart Pag
## Developer Dropdown
* Profile (Portfolio)
* Code/Documentation (GitHub)
* Download Resume


# Phase 3
## Fetch Restaurants
* Infinite Scroll [https://www.youtube.com/watch?v=NZKUirTtxcg]
* Filter
* Search


# Challenges

