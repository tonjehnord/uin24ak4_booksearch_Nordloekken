export default function Layout({children, handleSubmit, searchTerm, handleChange}) {
    return (
        <>
        <header>
            <h1>Booksearch</h1>
        </header>
        <main>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for a book..." value={searchTerm} onChange={handleChange} />
                    <input type="submit" value="Search"></input>
                </form>
            </section>
            {children}
        </main>
        </>
    )

}