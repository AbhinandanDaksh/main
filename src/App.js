import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import TourDetails from './pages/tourDetails/TourDetails';
import Footer from './components/footer/Footer';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className=''>
{/* <TourDetails /> */}
      <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
