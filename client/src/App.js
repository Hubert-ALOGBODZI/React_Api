import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Add from './pages/Add';
// import About from './pages/About';
// import View from './pages/View';
// import Update from './pages/Update';
// import Header from './components/Header';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      

    <ToastContainer />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Add' element={<Add />} />

        {/* <Route path='About' element={<About />} />
        <Route path='Update/id:' element={<Update />} />
        <Route path='View/:id' element={<View />} />  */}

      </Routes>
      
        </div>
     </BrowserRouter>

  );
}

export default App;
