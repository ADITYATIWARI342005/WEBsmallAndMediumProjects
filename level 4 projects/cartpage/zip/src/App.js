import React from 'react'
import { useGlobalContext } from './context'


function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1></h1>
      </div>
    )
  }
  return (
    <main>
  
    </main>
  )
}

export default App
