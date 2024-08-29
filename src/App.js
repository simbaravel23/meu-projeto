import './App.css';
import HelloWord from './componentes/HelloWord';
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';
function App() {

 const name = 'Ravel'
 const newName = name.toLocaleUpperCase()

 function sum (a, b){
    return a + b
 }


  return (
    <div className="App">
     
        <h1>Olá React</h1>
        <p>Meu primeiro app</p>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1 , 2)}</p>
       
        <HelloWord/>
        <SayMyName nome = {newName}/>
        <Pessoa nome="Ravel" idade="37" profissao="professor" foto= "https://via.placeholder.com/150"/>
        
    </div>
  );
}

export default App;
