import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import FoodDetails from "./pages/foodDetails"
import NotFound from "./pages/notFound"
import NavBar from "./components/navbar"
import Footer from "./components/footer"


function App() {

  return (
    <main className="bg-[#bdbdbd] w-full h-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-details/:meal_id" element={<FoodDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
