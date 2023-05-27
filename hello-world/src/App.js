import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <Props name="Vijay" heroName="Spider man">
      <p>This is a children</p>
      </Props> */}
      {/* <Props name="Nikhil" heroName="Bat man">
        <button>Action</button>
      </Props> */}
      {/* <Props name="Shyam" heroName="Super man"/> */}
      {/* <Welcome name="class component" heroName="Props Power"/> */}
    </div>
  );
}

export default App;
