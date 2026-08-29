import { motion } from "framer-motion";

function Opening({ book, onComplete }) {
  return (
    <motion.div
      className="opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="book-3d"
        initial={{
            rotateX: 0,
            rotateZ: 0,
            y: 0,
        }}
        animate={{
            rotateX: 2,
            rotateZ: 0,
            y: -8,
        }}
        transition={{
            duration: 1.6,
            ease: "easeOut",
        }}
        >
            {/* BACK COVER */}
        <div
        className="back-cover"
        style={{
            backgroundColor: book.color,
        }}
        ></div>

        {/* PAGE BLOCK */}
        <div className="page-block">
          <div className="page-surface">
            <div className="page-lines"></div>
          </div>
        </div>

        {/* SPINE */}
        <div className="book-spine"></div>

        {/* FRONT COVER */}
        <motion.div
          className="front-cover"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -180 }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
          }}
          onAnimationComplete={onComplete}
        >

          {/* OUTSIDE OF COVER */}
          <motion.div
            className="cover-front"
            style={{
              backgroundColor: book.color,
              color: book.textColor,
            }}
            animate={{
              boxShadow: [
                "10px 15px 30px rgba(0, 0, 0, 0.35)",
                "4px 8px 15px rgba(0, 0, 0, 0.20)",
                "0px 0px 5px rgba(0, 0, 0, 0.10)",
              ],
            }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
            }}
          >
            <span>THE READING ROOM</span>

            <h1>{book.title}</h1>

            <p>{book.author}</p>
          </motion.div>

          {/* INSIDE OF COVER */}
          <div className="cover-inside">
            <span>THE READING ROOM</span>
          </div>

          {/* COVER EDGE */}
          <div
            className="cover-edge"
            style={{
              backgroundColor: book.color,
            }}
          ></div>

        </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default Opening;