import logo from './logo.svg';
import './App.css';
import Inicio from './Inicio';
import Header from './Template/Header';
import Footer from './Template/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div><Header /><Inicio /><Footer /></div>
  );
}

export default App;
