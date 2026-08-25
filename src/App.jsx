import "./App.css";

const books = [
  {
    title: "Grid Systems",
    color: "#A6543D",
    width: 70,
    height: 430,
    textColor: "#F4EEE8",
  },
  {
    title: "Kindle Entrepreneur",
    color: "#D8D8D8",
    width: 75,
    height: 430,
    textColor: "#17181D",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    color: "#25262A",
    width: 310,
    height: 430,
    textColor: "#EAEAEA",
    featured: true,
  },
  {
    title: "Apple Book",
    color: "#D9D9D9",
    width: 75,
    height: 430,
    textColor: "#17181D",
  },
  {
    title: "Principles of UX",
    color: "#202024",
    width: 75,
    height: 430,
    textColor: "#EAEAEA",
  },
  {
    title: "How To",
    color: "#D9D9D9",
    width: 75,
    height: 430,
    textColor: "#17181D",
  },
];

function App() {
  return (
    <main className="library">
      <section className="library-header">
        <div className="header-line"></div>
        <h1>FAVOURITE BOOKS</h1>
        <div className="header-line"></div>
      </section>

      <section className="bookshelf">
        {books.map((book, index) => (
          <article
            className={`book ${book.featured ? "featured" : ""}`}
            style={{
              width: `${book.width}px`,
              height: `${book.height}px`,
              backgroundColor: book.color,
              color: book.textColor,
            }}
            key={index}
          >
            {book.featured ? (
              <div className="featured-content">
                <span className="bestseller">A PERSONAL FAVOURITE</span>

                <h2>{book.title}</h2>

                <p>{book.author}</p>

                <span className="library-edition">THE READING ROOM</span>
              </div>
            ) : (
              <h2 className="spine-title">{book.title}</h2>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;