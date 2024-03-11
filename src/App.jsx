import React from "react";
import Header from "./Header/Header"
import Warnings from "./Warnings/Warnings"
import Phrase from "./Phrase/Phrase"
import Menus from "./Menus/Menus"
import Footer from "./Footer/Footer";

const App = () => {
  return <>
    <Header/>
    <Warnings/>
    <Phrase/>
    <Menus/>
    <Footer/>
  </>
}

export default App;