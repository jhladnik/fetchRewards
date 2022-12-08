import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';

 
export default function App() {
 
  return (
    <>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}