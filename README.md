# Sundays Art Hub – Art Gallery Web Interface

A clean and minimal web interface built with **React** and **Tailwind CSS** to showcase curated paintings, drawings, sculptures, and featured artists from Sundays Art Hub.

## ✨ Features

- 🖼️ **Featured Paintings Carousel**: Showcases highlighted artworks with details.
- 👨‍🎨 **Featured Artists Grid**: Displays selected artists with locations.
- 📝 **Painting Detail Page**: Detailed view for individual paintings with purchasing information.
- 📱 **Responsive UI**: Optimized for both mobile and desktop users.
- ⚡ **Tailwind CSS Styling**: Lightweight and fully customizable styles.

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.tsx                # Top navigation bar
│   ├── FeaturedPaintings.tsx     # Horizontal scrollable painting section
│   ├── FeaturedArtists.tsx       # Grid of featured artists
│   └── PaintingDetail.tsx        # Detailed painting information
│
├── pages/
│   ├── Home.tsx                  # Landing page with paintings and artists
│   └── PaintingPage.tsx          # Standalone page for a specific painting
│
├── main.tsx                      # React root with Home route
├── index.css                     # Tailwind base + utilities
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
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
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to `http://localhost:5173`

---

## 🖼️ Image Assets

Ensure that your `public/images/` directory includes the following:

- `wallowing_breeze.jpg`
- `resistance.jpg`
- `worn_basket.jpg`
- `the_youngest.jpg`

These are used in the **FeaturedPaintings** and **PaintingDetail** components.

---

## 📦 Build

To generate a production build:

```bash
npm run build
# or
yarn build
```

---

## 📌 Future Improvements

- Routing with `react-router` for better navigation between artworks.
- Integration with backend (CMS or eCommerce platform).
- Filter and sort features for paintings and artists.
- Dynamic data loading via API or CMS.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍🎨 Created by

**Elisa Niyogisubizo**  
Founder & Gallery Director – Sundays Art Hub  
Passionate about making art accessible and elevating African creative voices.
