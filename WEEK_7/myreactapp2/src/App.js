import logo from './logo.svg';
import './App.css';
import { Rendering } from './conditional_rendering/rendering';
import {List} from './list'
import {Event} from './events/event';

function App() {
  return (<>
   <h1 className='s'>styling in css </h1>
   <h2 style={{color:'blue',backgroundColor:'lightpink'}}>using inline css</h2>
   <Rendering/>
   <h2>rendering list</h2>
   <List/>
   <h2>responding to the event</h2>
   <Event/>
   </>
  );
}

export default App;
