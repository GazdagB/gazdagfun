
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import NoPage from './pages/NoPage';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import TicTacToe from './pages/TicTacToe';
import ToDoList from './pages/ToDoList';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route path= '/ToDoList' element={<ToDoList/>}></Route>
        <Route path='/TicTacToe' element={<TicTacToe/>}></Route>
        <Route path='*' element={<NoPage/>}></Route>

      </Routes> 
    </Router>
    
  )
}

export default App
