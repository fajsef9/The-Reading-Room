import { motion } from "framer-motion";

function BookDetails({ book, onBack }) {
  return (
    <motion.section
      className="book-details"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <button onClick={onBack}>
        ← BACK TO LIBRARY
      </button>

      <div className="details-content">
        <div className="details-cover">
          <h1>{book.title}</h1>
          <p>{book.author}</p>
        </div>

        <div className="details-info">
          <p className="details-label">BOOK</p>

          <h1>{book.title}</h1>

          <p>{book.author}</p>

          <div className="rating">
            ★★★★★
          </div>

          <p className="review">
            This is where my review of the book
            will eventually go.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default BookDetails;