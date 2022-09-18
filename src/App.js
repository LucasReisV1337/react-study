import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List  from './components/List'


function App() {
  return (
      <div className = "App" >
      <header className="App-header">
        <Frase/>
        <SayMyName nome="Lucas" />
        <SayMyName nome="Matheus" />
        <Pessoa nome="Lucas" idade="21" profissao="Programador" foto="https://via.placeholder.com/155" />
        <List/>
      </header>
      
    </div>
  );
}

export default App;
