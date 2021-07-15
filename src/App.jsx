import HomeHero from "./components/Hero/Hero.component";
import AboutUs from "./components/Hompagesections/AboutUs.component";
import Signin from "./components/Signin/Signin.component";
import DefaultHOC from "./HOC/Default.HOC";
import ContactUs from "./components/Hompagesections/ContactUs.component";
import ApplyNow from "./components/ApplyNow/ApplyNow.component";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.component";
import home from "./components/Dashboard/Home.component";





function App() {
  return (
    <>
    
      <DefaultHOC path="/Signin" exact component={Signin}/> 
      <DefaultHOC path="/JoinUs" exact component={ ApplyNow}/>
      <DefaultHOC path="/" exact component={ HomeHero}/>
      <DefaultHOC path="/" exact component={ AboutUs}/>
      <DefaultHOC path="/" exact component={ ContactUs}/>
      <DefaultHOC path="/dashboard" exact component={ EmployeeDashboard}/>
      <DefaultHOC path="/dashboard" exact component={ home}/>
      
      

    </>
  );
}

export default App;