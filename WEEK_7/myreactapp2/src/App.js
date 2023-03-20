import logo from './logo.svg';
import './App.css';
import { Rendering } from './conditional_rendering/rendering';
import {List} from './list'

function App() {
  return (<>
   <h1 className='s'>styling in css </h1>
   <h2 style={{color:'blue',backgroundColor:'lightpink'}}>using inline css</h2>
   <Rendering/>
   <h2>rendering list</h2>
   <List/>
   </>
  );
}

export default App;
