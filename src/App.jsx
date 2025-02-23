import { useState } from 'react'
import Sidebar from './components/sidebar'
import Main from './components/main'

function App() {

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Main />
      </div>

    </>
  )
}

export default App
