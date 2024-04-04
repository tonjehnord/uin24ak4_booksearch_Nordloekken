import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'

function App() {

  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/subjects/james_bond_character.json`)
      const data = await response.json()
      setBooks(data.results)
    } catch {
      console.error('error getting books')
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
    <Layout>
       
      
    </Layout>
    </>
  )
}

export default App
