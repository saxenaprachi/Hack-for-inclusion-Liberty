import HomeHero from "./components/Hero/Hero.component";
import AboutUs from "./components/Hompagesections/AboutUs.component";
import Navbar from "./components/Navbar/Navbar.component";
import Signin from "./components/Signin/Signin.component";
import DefaultHOC from "./HOC/Default.HOC";




function App() {
  return (
    <>
      
      <DefaultHOC path="/Signin" exact component={ Navbar}/>
      <DefaultHOC path="/Signin" exact component={Signin}/> 
      <DefaultHOC path="/" exact component={ HomeHero}/>
      <DefaultHOC path="/" exact component={ AboutUs}/>
    </>
  );
}

export default App;