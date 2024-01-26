
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Sidebar from './Routes/Sidebar';
import Header from './components/Header';
function App() {
  return (
    <>
<Header/> 
      <Sidebar />
    <Toaster />
    </>
  );
}

export default App;
