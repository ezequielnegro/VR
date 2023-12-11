
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
const App=() =>{
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"hola mundo"} />
      <Footer />
    </div>
  )
}

export default App
