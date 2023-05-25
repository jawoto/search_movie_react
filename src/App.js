import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import Search from "./components/Search";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Example from "./components/Example";


function App() {
  return (
    <Router>
    <div>
    <NavigationBar />
      <Routes>
      {/* <div className="myBG"> */}
        
      <Route path="/" element={<Intro />} />
      {/* </div>
      */}

      
      {/* <div className="search"> */}
      <Route path="/search" element={<Search />} />
      {/* </div> */}
  
      {/* <div className="trending"> */}
      <Route path="/trending" element={<Trending />} />
      {/* </div> */}
    
      
       {/* <div className="superhero"> */}
       <Route path="/superhero" element={<Superhero />} />
      {/* </div> */}
      </Routes>
    </div>
  
    </Router>
  );
}

export default App;
