import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      <Props name="Vijay" heroName="Spider man">
      <p>This is a children</p>
      </Props>
      <Props name="Nikhil" heroName="Bat man">
        <button>Action</button>
      </Props>
      <Props name="Shyam" heroName="Super man"/>
      //class components
      <Welcome name="class component" heroName="Props Power"/>
    </div>
  );
}

export default App;
