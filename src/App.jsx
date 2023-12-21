import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ProductPage from "./components/ProductPage/ProductPage"
import ContactPage from "./components/ContactPage/ContactPage"

const App = () => {
  return (
    <BrowserRouter>
<Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Products" element={<ProductPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="*" element={ <Navigate to={"/"}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
