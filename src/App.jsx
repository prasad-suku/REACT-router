import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Service from './pages/Service'
import Navbar from './Components/Navbar'
import Email from './pages/Email'
import Posts from './pages/Posts'
import Loginpage from './pages/Loginpage'

function App() {
  return (
    <>
    <Router>
    

        {/* rendering navbar */}
        <Navbar />

      

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />}/>
              <Route path='/email' element={<Email/>}/>
           
             <Route path='/service' element={<Service/>}/>
       <Route path='post/:id' element={<Posts/>}/>
         <Route path='*'  element={<h2>no page found</h2>}/>     
       
       
        </Routes>


    </Router>
    </>
    
  )
}

export default App