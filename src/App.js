
import './App.css';

function App() {

 const name = 'Ravel'
 const newName = name.toLocaleUpperCase()

 function sum (a, b){
    return a + b
 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá React</h1>
        <p>Meu primeiro app</p>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1+2)}</p>
      </header>
    </div>
  );
}

export default App;
