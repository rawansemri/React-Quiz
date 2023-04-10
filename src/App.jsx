import { lazy, Suspense } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route } from "react-router-dom"


const Math = lazy(() => import("./pages/Math"));
const English = lazy(() => import("./pages/English"));
const Computer = lazy(() => import("./pages/Computer"));
const Chemistry = lazy(() => import("./pages/Chemistry"));
const Science = lazy(() => import("./pages/Science"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Home = lazy(() => import("./pages/Home"));

function App() {

  return (
    <div className="App">
      <Suspense fallback='Loading...'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/math" element={<Math/>} />
        <Route path="/english" element={<English/>} />
        <Route path="/computer" element={<Computer/>} />
        <Route path="/chemistry" element={<Chemistry/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      </Suspense>

    </div>
  )
}

export default App
