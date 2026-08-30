# The Reading Room

An interactive digital bookshelf built with **React, Three.js, and Framer Motion**. The Reading Room turns a personal book collection into an immersive library experience where each book can be explored as an interactive 3D model.

## Features

* Interactive bookshelf with multiple books
* Scroll through the collection
* Select and open individual books
* Unique colors for each book
* Interactive 3D book models
* Rotate books using mouse or touch controls
* Dynamic book titles and authors
* Individual book ratings
* Favourite quotes and descriptions
* Responsive layout
* Social links for Instagram, LinkedIn, and GitHub
* Smooth animations using Framer Motion

## Built With

* **React** — UI and application structure
* **Vite** — Development and production build tool
* **React Three Fiber** — 3D rendering with Three.js
* **Drei** — Helpers and components for React Three Fiber
* **Three.js** — 3D graphics
* **Framer Motion** — Animations and transitions
* **React Icons** — Social media icons
* **CSS** — Styling and responsive layout
* **Blender** — 3D book model

## Project Structure

```text
The-Reading-Room/
│
├── public/
│   ├── fonts/
│   │   ├── DMMono-Regular.ttf
│   │   └── PlayfairDisplay-Regular.ttf
│   │
│   └── models/
│       └── book.glb
│
├── src/
│   ├── components/
│   │   ├── Book.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BookModel.jsx
│   │   └── Opening.jsx
│   │
│   ├── data/
│   │   └── books.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/fajsef9/The-Reading-Room.git
```

### Enter the project directory

```bash
cd The-Reading-Room
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated `dist` folder should be served through a web server rather than opening `index.html` directly from the file system.

## Adding a New Book

Book information is stored separately in:

```text
src/data/books.js
```

Add a new object to the `books` array:

```js
{
  title: "Book Title",
  author: "Author Name",
  color: "#A6543D",
  textColor: "#F4EEE8",
  rating: 5,
  quote: "A favourite quote from the book.",
  description:
    "A short introduction to the book and its premise."
}
```

The same data automatically controls:

* Book title
* Author
* Shelf appearance
* 3D book color
* 3D cover title
* 3D cover author
* 3D spine title
* Rating
* Quote
* Description

No separate 3D model is required for each book.

## 3D Model

The book model was created in Blender and exported as:

```text
public/models/book.glb
```

The React application dynamically changes the book's `BaseColor` material based on the selected book.

The title, author, and spine text are rendered dynamically using React Three Fiber, allowing every book to have different content while sharing the same 3D model.

## Social Links

Social links are displayed at the bottom of the library interface using `react-icons` for Instagram, LinkedIn, and GitHub.

The profile URLs can be updated in `App.jsx`.

## Future Improvements

* Add personal notes for each book
* Add favourite quotes section
* Add reading dates and progress
* Add book categories and genres
* Add search and filtering
* Improve mobile 3D interactions
* Add page-turning animations
* Add a currently-reading section

## Author

**Fajsef9**

Computer Science student interested in software development, cybersecurity, AI/ML, and creative projects.

---

*The Reading Room — a small digital space for the books worth remembering.*
