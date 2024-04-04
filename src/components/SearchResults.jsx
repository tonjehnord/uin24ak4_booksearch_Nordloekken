import BookCard from "./BookCard"

export default function SearchResults({books}) {
    return (
        <section className="book-list">
            {books.map((book) => (
                <BookCard key={book.key} book={book} />
            ))}
        </section>
    )
}