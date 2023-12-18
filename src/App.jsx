import "./App.css"
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"hola mundo"} />}/>
        <Route path="*" element={ <Navigate to={"/"}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
