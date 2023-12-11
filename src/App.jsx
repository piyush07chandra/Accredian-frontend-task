import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Home/>
      <Routes>
        
        <Route path='/' element={<SignUpForm/>}/>
        <Route path='/log' element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
    
  
      
    </>
  )
}

export default App
