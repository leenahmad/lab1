import React from "react";
import Header from "./components/Header";
// import Main from "./components/Main";
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";


class App extends React.Component{
  render(){
    return (
      <>
         <Header/>

         <Gallery/>
        
         <Footer/>
          
      </>

    )
  }
  
}
export default App;
