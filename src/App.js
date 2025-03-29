import { Outlet } from "react-router-dom"
import './App.css';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header/>
    <Outlet/>
    <Footer/>
    </div >
  );
};

export default App;
