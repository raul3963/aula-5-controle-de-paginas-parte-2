import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => {
  return (<div>home</div>)
}
const About = () => {
  return (<div>About</div>)
}
const Contacts = () => {
  return (<div>Contacts</div>)
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contacts</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
