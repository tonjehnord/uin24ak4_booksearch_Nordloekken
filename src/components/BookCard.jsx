export default function BookCard({book}) {

    const getBookCover = (book) => {
        if (book.cover_i) {
          return `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        } else {
          return 'https://via.placeholder.com/150x200/CCCCCC/FFFFFF?text=No+Image'
        }
      }

    return (
        <article key={book.key}>
            <img src={getBookCover(book)} alt={book.title} />
            <h2>{book.title}</h2>
            <p>First published: {book.first_publish_year}</p>
            <p>Author: {book.author_name && book.author_name.join(', ')}</p>
            <a href={`https://www.amazon.com/s?k=${book.title}`} target="_blank">Search on Amazon</a>
        </article>
    )
}
