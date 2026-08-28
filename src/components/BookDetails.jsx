function BookDetails({ book, onBack }) {
  return (
    <section className="book-details">
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
    </section>
  );
}

export default BookDetails;