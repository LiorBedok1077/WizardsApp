import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Pages:
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* sign in page */}
        <Route 
          path="/signin"
          element={<Login />}
          />
          {/* sign up page */}
        <Route 
          path="/signup"
          element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
