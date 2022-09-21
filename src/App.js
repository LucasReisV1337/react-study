import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form'


function App() {
  return (
      <div className = "App" >
      <header className="App-header">
        <Form/>
        <Frase/>
        <SayMyName nome="Lucas" />
        <SayMyName nome="Matheus" />
        <Pessoa nome="Lucas" idade="21" profissao="Programador" foto="https://picsum.photos/200/300" />
        <List />
        <Evento numero="1" />
        <Evento numero="2" />
      </header>
      
    </div>
  );
}

export default App;
