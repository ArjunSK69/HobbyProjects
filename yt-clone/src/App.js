import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in your src/index.js or App.js file */
import './_base.scss';
import './_app.scss'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { useEffect, useState } from 'react';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app_container'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app_main'>
          {children}
        </Container> 
      </div>

    </>
  )
}



function App() {

  const {accessToken, loading} = useSelector(state=>state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loading && !accessToken){
      navigate('/auth')
    }
  },[accessToken, loading, navigate])

  return (
    
    <Routes>
    <Route path='/' element={<Layout><HomeScreen /></Layout>} />
      <Route path='/auth' element={<LoginScreen />} />
      <Route path='/search' element={<Layout><h1>Search Results</h1></Layout>} />
      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
    

  )

}

export default App;
