import { motion } from "framer-motion";
import BookModel from "./BookModel";

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

        <div className="details-book">
          <BookModel book={book} />
        </div>

        <div className="details-info">
          <span className="details-label">
            PERSONAL COLLECTION
          </span>

          <h1>{book.title}</h1>

          <p>{book.author}</p>

          <div className="rating">
            {"★".repeat(Math.floor(book.rating))}
            {book.rating % 1 !== 0 ? "½" : ""}
          </div>

          <p className="quote">"{book.quote}"</p>

          <p className="review">
            {book.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default BookDetails;