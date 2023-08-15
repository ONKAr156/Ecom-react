import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import { ErrorBoundary } from 'react-error-boundary'
import Test from './Pages/Test'

const App = () => {
  function Fallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return <BrowserRouter>
    <ErrorBoundary FallbackComponent={Fallback}>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
{/* --------------------------------------------------------------------------- */}
      {/* <Test/> */}
    </ErrorBoundary>
  </BrowserRouter>
}

export default App