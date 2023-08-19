import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
