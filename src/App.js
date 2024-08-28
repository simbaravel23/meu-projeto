
import './App.css';

function App() {

 const name = 'Ravel'
 const newName = name.toLocaleUpperCase()

 function sum (a, b){
    return a + b
 }

 const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
     
        <h1>Olá React</h1>
        <p>Meu primeiro app</p>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1 , 2)}</p>
        <img src={url} alt="minha imagem" />
     
    </div>
  );
}

export default App;
