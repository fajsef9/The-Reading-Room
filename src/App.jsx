import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Book from "./components/Book";
import BookDetails from "./Components/BookDetails";
import Opening from "./components/Opening";

const books = [
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    color: "#3A3A3A",
    textColor: "#F4EEE8",
  },

  {
    title: "Visionary Thinking",
    author: "Ashish Jaiswal",
    color: "#C9B79C",
    textColor: "#17181D",
  },

  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    color: "#7E9B82",
    textColor: "#F4EEE8",
  },

  {
    title: "Atomic Habits",
    author: "James Clear",
    color: "#E8DCC8",
    textColor: "#17181D",
  },

  {
    title: "The Art of War",
    author: "Sun Tzu",
    color: "#5A5148",
    textColor: "#F4EEE8",
  },

  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    color: "#315C69",
    textColor: "#F4EEE8",
  },

  {
    title: "Meditations",
    author: "Marcus Aurelius",
    color: "#77746C",
    textColor: "#F4EEE8",
  },

  {
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    color: "#4D5B52",
    textColor: "#F4EEE8",
  },

  {
    title: "Shadow and Bone",
    author: "Leigh Bardugo",
    color: "#3E4A69",
    textColor: "#F4EEE8",
  },

  {
    title: "Better Than the Movies",
    author: "Lynn Painter",
    color: "#D98C91",
    textColor: "#17181D",
  },

  {
    title: "Dark Matter",
    author: "Blake Crouch",
    color: "#25252B",
    textColor: "#F4EEE8",
  },

  {
    title: "Hidden Pictures",
    author: "Jason Rekulak",
    color: "#B7A98F",
    textColor: "#17181D",
  },

  {
    title: "1984",
    author: "George Orwell",
    color: "#6B3030",
    textColor: "#F4EEE8",
  },

  {
    title: "Animal Farm",
    author: "George Orwell",
    color: "#52664A",
    textColor: "#F4EEE8",
  },
];

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