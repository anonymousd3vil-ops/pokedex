import Search from "./components/search/search"
import CostomRoutes from "./routes/costumRoutes"
import { Link } from "react-router-dom"
import './app.css'
import Footer from '../src/components/footer/footer.jsx'

function App() {
  return (
    <>
      <div className="pokedex-wrapper">
        <Link to="/" className="title">
          <h1 className="pokedex-heading">Pokedex <span className="author-name">by Vivek</span></h1>
        </Link>
        <Search />
        <CostomRoutes />
        <Footer />
      </div>
    </>
  )
}

export default App
