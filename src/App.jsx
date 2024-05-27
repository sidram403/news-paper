import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import SingleNews from './pages/SingleNews.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
   
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news/:id' element={<SingleNews />} />
    </Routes>
    

    <Footer />
    </BrowserRouter>
   
  )
}

export default App
