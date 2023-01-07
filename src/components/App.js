import "./App.scss";
import Header from "./views/header/Header";
import Navbar from "./views/navbar/Navbar";
import Banner from "./views/banner/Banner";
import Reviews from "./views/reviews/Reviews";
import Footer from "./views/footer/Footer";
import MainPage from "./views/mainPage/MainPage";

const App = () => (
    <div className="App">
        <Header/>
        <Navbar/>
        <Banner/>
        <MainPage/>
        <Reviews/>
        <Footer/>
    </div>
);

export default App;
