import "./App.css";
import Header from "./views/header/Header";
import Navbar from "./views/navbar/Navbar";
import Banner from "./views/banner/Banner";
import Reviews from "./views/reviews/Reviews";
import Footer from "./views/footer/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Banner />
    <Reviews />
    <Footer />
  </div>
);

export default App;
