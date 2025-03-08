import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Gifting from "./components/Gifting/Gifting";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Header />
      <div className="bg-primary flex flex-col w-full gap-15 md:gap-25">
        <Banner />
        <Registration />
        <About />
        <Activities />
        <Gifting />
      </div>
      <Footer />
    </>
  );
}

export default App;
