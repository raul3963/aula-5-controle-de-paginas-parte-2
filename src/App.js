import logo from './logo.svg';
import { useNavigate, useParams, Routes, Route, Link } from "react-router-dom";
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
const RegisterUser = () => {
  let navigate = useNavigate();
  const registerUser = () => {
    console.log("Usuario registrado");
    navigate("/user-list");
  }
  return (<div>register-user
    <button onClick={registerUser}>salvar</button>
  </div>)
}
const UsersList = () => {
  let navigate = useNavigate();
  let params = useParams();
  console.log(params)
  const registerUser = () => {
    navigate("/register-user");
  }
  return (<div>
    UsersList
    <br />
    <button onClick={registerUser}>Cadastrar</button>
    </div>)
}


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contacts</Link>
      <Link to="/user-list">Users List</Link>
      <Link to="/user-list/1">Users List</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="register-user" element={<RegisterUser />} />
        <Route path="user-list" element={<UsersList />} />
        <Route path="user-list/:id" element={<UsersList />} />
      </Routes>
      
    </div>
  );
}

export default App;
