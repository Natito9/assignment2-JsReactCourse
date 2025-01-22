import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import ChildComponent from "./ChildComponent";

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

  
  return (
    <div>
      <header>
        <h1>Hi</h1>
      </header>
      <ChildComponent person={person} />
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      {/* <PropsComponent person={person} /> */}
      {/* <MyStateComponent /> */}
      <EffectsComponent />
    </div>
  );
}

export default App;
