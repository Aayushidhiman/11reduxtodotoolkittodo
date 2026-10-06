import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="bg-[#dad9d963] min-h-screen text-black flex flex-col items-center pt-12 select-none">
      <h1 className="text-3xl font-bold tracking-wide mb-6">Learn about redux toolkit</h1>
      <div className="w-full max-w-xl px-4">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
