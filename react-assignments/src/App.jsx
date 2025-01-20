import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

function App() {


// set state is a function 
const [submitted,setSubmitted]= useState(false)

const submitForm = () => {
  setSubmitted(submitted(true), console.log("form submitted"))
}

  return (
    <div>
      <header>
      </header>
      <MyStateComponent />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default App;
