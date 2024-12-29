import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // Use the useSelector hook to get the loading state from the Redux store
  const loading = useSelector(state => state.loading.loading);

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
