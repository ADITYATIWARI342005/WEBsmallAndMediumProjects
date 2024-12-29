
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {loading, setLoading} = useContext(LoadingContext);
  return (
    <>
    
    <BrowserRouter>
   
          <Routes>

            <Route index element={<Details />} />
            <Route path="/resume"  />
            <Route path="/signin"  />
            <Route path="/signup"  />
             
          
         

          </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
