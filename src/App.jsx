import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import { BurgerMenu } from "./components/Navbar/BurgerMenuContext";

function App() {
  return (
    <>
      <BurgerMenu>
        <Navbar />
      </BurgerMenu>
      <Layout>
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
