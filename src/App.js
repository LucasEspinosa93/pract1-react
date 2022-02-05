import './App.css';
import Animales from './Animales';
import Alerta from './Alerta';


const App = () => {
  const mensaje = 'Hello World!'
  const mensajePrueba = 'Hola Gordo Sapo, estoy aprendiendo REACT con el gordoMidu'

  return (
    <div className="App">
        {mensaje}  {/* Siempre que lleve llaves{} es una evaluación */}
        <br />

        {mensajePrueba}
        <br />

        <Animales  />
        <br />

        <Alerta color='blue' message='Estamos trabajando' />
        <Alerta color='green' message='En un curso' />
        <Alerta color='aqua' message='De React' />
        <Alerta color='red' message='Si no sale este mensaje ha surgido un error' />
    </div>
  );
}

export default App;
