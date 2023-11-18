 import { HashRouter} from 'react-router-dom'
 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  AppRouter } from './router'

function App() {
 
  return (
    <>
    <HashRouter>
    <AppRouter/>
    </HashRouter>
     
    </>
  )
}

export default App
