# Sundays Art Hub – Art Gallery Web Interface

This project is a clean and responsive frontend for an art gallery platform called Sundays Art Hub. It showcases featured paintings and artists, and provides a detailed view for individual artworks. Built with React and Tailwind CSS, the interface is designed for seamless browsing of curated artwork.


## Backend Repository

[Backend link](https://github.com/ElisaNiyogisubizo/sundays-bn)

## Video Demo

A video walkthrough demonstrating all the functionalities of the app:

[Demo](https://drive.google.com/drive/folders/1S-8ZqW_oGRUDxRDQBcXx8xEsXL7BG8g1?usp=drive_link)

## Project Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sundays-art-hub.git
   cd sundays-art-hub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## Deployment Plan

This project is ready for deployment using platforms such as Vercel, Netlify, or GitHub Pages.

To generate a production-ready build:

```bash
npm run build
```

The `dist/` directory can be deployed directly to your preferred hosting provider.

## App Structure

- **Homepage**: Features a navigation bar, a scrollable horizontal gallery of selected paintings, and a grid view of featured artists.
- **Painting Page**: A detailed layout displaying artwork information, artist name, medium, description, and pricing.

All components are modular and reusable.

## Designs and Assets

- **Figma Mockups**: [Insert Figma link if available]
- **App Interface Screenshots**:
  - Homepage (paintings and artists section)
  - Painting Detail Page
- **Circuit Diagram**: Not applicable

## Code Files

The source code is organized as follows:

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── FeaturedPaintings.tsx
│   ├── FeaturedArtists.tsx
│   └── PaintingDetail.tsx
├── pages/
│   ├── Home.tsx
│   └── PaintingPage.tsx
├── main.tsx
├── index.css
```

All components are styled using Tailwind CSS and rendered with React.

## Summary

This repository contains all necessary frontend code to demonstrate a working gallery web interface. It is designed for scalability and ease of integration with a backend API for future enhancements. The demo video provides a complete walkthrough of the user interface and key functionalities.
