import { motion } from "framer-motion";

function Book({
    book,
    isActive,
    onSelect,
    spineWidth,
    openWidth,
 }) {
  return (
    <motion.article
    className={`book ${isActive ? "active" : ""}`}
    onClick={onSelect}
    animate={{
        width: isActive ? openWidth : spineWidth,
        y: isActive ? -20 : 0,
        opacity: isActive ? 1 : 0.7,
    }}
    transition={{
        type: "spring",
        stiffness: 180,
        damping : 22,
    }}
    style={{
        height:  430,
        backgroundColor: book.color,
        color: book.textColor,
    }}
    >
        {isActive ? (
            <div className="book-cover">
          <span className="book-label">
            THE READING ROOM
          </span>

          <div className="book-info">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>

          <div className="book-footer">
            <span>PERSONAL EDITION</span>
            <span>2026</span>
          </div>
        </div>
      ) : (
        <h2 className="spine-title">
          {book.title}
        </h2>
      )}
    </motion.article>
    
  );
}

export default Book;

