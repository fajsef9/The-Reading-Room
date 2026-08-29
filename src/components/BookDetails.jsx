import { motion } from "framer-motion";

function BookDetails({ book, onBack }) {
  return (
    <motion.div
      className="book-details"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <button onClick={onBack}>
        ← BACK TO LIBRARY
      </button>

      <div className="details-content">

        {/* BOOK MODEL */}
        <div className="details-book">

          {/* PAGES */}
          <div className="details-pages"></div>
            {/* SPINE */}
            <div className="details-spine"></div>
          {/* COVER */}
          <div
            className="details-cover"
            style={{
              backgroundColor: book.color,
              color: book.textColor,
            }}
          >
            <span className="details-label">
              THE READING ROOM
            </span>

            <h1>{book.title}</h1>

            <p>{book.author}</p>
          </div>

        </div>

        {/* BOOK INFORMATION */}
        <div className="details-info">
          <span className="details-label">
            PERSONAL COLLECTION
          </span>

          <h1>{book.title}</h1>

          <p>
            A book from my personal reading collection.
          </p>

          <div className="rating">
            ★ ★ ★ ★ ★
          </div>

          <p className="review">
            This is where the book description, my thoughts,
            favourite quotes, and other information about the
            book will eventually go.
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default BookDetails;