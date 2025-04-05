import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Header from './layout/header/Header';
import './App.css'


function App() {
  return (
    <>
      <Header/>
  
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
   
    </>
  )
}

export default App
