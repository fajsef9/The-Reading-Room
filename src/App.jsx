import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Book from "./components/Book";
import BookDetails from "./Components/BookDetails";
import Opening from "./components/Opening";
import books from "./data/books";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SPINE_WIDTH = 75;
const OPEN_BOOK_WIDTH = 310;
const BOOK_GAP = 28;

function App() {
  const [activeBook, setActiveBook] = useState(2);
  const [view, setView] = useState("library");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWheel = (event) => {
    if (view !== "library") {
      return;
    }

    if (event.deltaY > 0) {
      setActiveBook((currentBook) =>
        Math.min(currentBook + 1, books.length - 1)
      );
    } else if (event.deltaY < 0) {
      setActiveBook((currentBook) =>
        Math.max(currentBook - 1, 0)
      );
    }
  };

  const getShelfPosition = () => {
    const spaceBeforeActive =
      activeBook * (SPINE_WIDTH + BOOK_GAP);

    const activeBookCenter =
      spaceBeforeActive + OPEN_BOOK_WIDTH / 2;

    const screenCenter = windowWidth / 2;

    return screenCenter - activeBookCenter;
  };

  return (
    <main className="library">
      <AnimatePresence mode="sync">

        {view === "library" && (
          <motion.div
            key="library"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header className="library-header">
              <div className="header-line" />

              <h1>FAVOURITE BOOKS</h1>

              <div className="header-line" />
            </header>

            <section
              className="bookshelf-window"
              onWheel={handleWheel}
            >
              <motion.div
                className="bookshelf"
                animate={{
                  x: getShelfPosition(),
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
              >
                {books.map((book, index) => (
                  <Book
                    key={book.title}
                    book={book}
                    isActive={index === activeBook}
                    view={view}
                    onSelect={() => {
                      if (index === activeBook) {
                        setView("opening");
                      } else {
                        setActiveBook(index);
                      }
                    }}
                    spineWidth={SPINE_WIDTH}
                    openWidth={OPEN_BOOK_WIDTH}
                  />
                ))}
              </motion.div>
            </section>

            <p className="scroll-hint">
              SCROLL TO EXPLORE
            </p>
            <div className="social-links">
            <a
              href="https://www.instagram.com/rohan.kb9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/rohankumar-balachandar-93a850347/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/fajsef9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          </motion.div>
        )}

        {view === "opening" && (
          <Opening
            key="opening"
            book={books[activeBook]}
            onComplete={() => setView("book")}
          />
        )}

        {view === "book" && (
          <BookDetails
            key="book"
            book={books[activeBook]}
            onBack={() => setView("library")}
          />
        )}

      </AnimatePresence>
    </main>
  );
}

export default App;