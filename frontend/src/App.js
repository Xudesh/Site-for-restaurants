import React from "react"
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Contact  from "./pages/Contact";
import Restaurant from "./pages/Restaurant";


class App extends React.Component{
  render(){
    return(
      <div>
        <Header />


        <Routes>
          <Route path="/contact" element={ < Contact /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/restaurant" element={ <Restaurant /> } />
        </Routes>

        
      </div>
    )
  }
}

export default App