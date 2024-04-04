import BookCard from "./BookCard"

export default function Layout({book}) {
    return (
        <>
        <header>
            <h1>Booksearch</h1>
        </header>
        <main>
            <BookCard book={book}/>
        </main>
        </>
    )

}