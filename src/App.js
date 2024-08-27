import logo from './logo.svg';
import './App.css';
import CounterClass from './increment and decrement/class';
import Both from './increment and decrement/function';

function App() {
  return (
    <div className="App">
      <CounterClass/>
      <Both/>
    </div>
  );
}

export default App;
