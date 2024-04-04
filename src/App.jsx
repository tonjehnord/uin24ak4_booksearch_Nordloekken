import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=james+bond`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error('Error fetching books')
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleSearch = async () => {
    try {
      if (searchTerm.length < 3) {
        setBooks([])
        setSearchResults([])
        return
      }
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
      const data = await response.json()
      if (data.docs.length > 0) {
        setSearchResults(data.docs)
      } else {
        setSearchResults([])
        setBooks([])
      }
    } catch {
      console.error('Error searching books')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch()
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Layout handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange}>
        {searchResults.length > 0 ? (
          <SearchResults books={searchResults} />
        ) : (
          <SearchResults books={books} />
        )}
      </Layout>
    </>
  )
}

export default App
