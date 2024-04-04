export default function BookCard({book}) {
    console.log(book)
    return (
        <section>
            {book?.map(item => (
                <article key={item.key}>
                    <h2>{item.title}</h2>
                    <p>Forfatter: {item.author_name}</p>
                    <p>Utgivelsesår: {item.publish_date}</p>
                    <p>Gjennomsnittlig vurdering: {item.ratings_count}</p>
                </article>
            ))}
        </section>
    )
}
