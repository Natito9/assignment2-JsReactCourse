import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
//for the routes
import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBAr";
import HomePage from "./Components/HomePage/HomePage";  
import Error404 from "./Components/Error404/Error404";  

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  //  TODO ad routes to the components we've created so far
  return (
    <>
      <h1>Im a title</h1>
      <NavBar/>
      <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path="/effects" element={<EffectsComponent/>}/>
        <Route path="/state" element={<MyStateComponent/>}/>
        <Route path="/person" element={<PropsComponent person={person} />}/>
        <Route path="*" element={<Error404 />} />
        </Routes>
    
    </>
  );
}

export default App;