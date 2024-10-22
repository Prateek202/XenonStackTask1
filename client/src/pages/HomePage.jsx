import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import Recommendation from "../components/Recommendation"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Recommendation />
      <Footer />
    </>
  )
}

export default HomePage