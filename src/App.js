import logo from './logo.svg';
import './App.css';

// Importing components
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import Footer from './components/Footer';

// Main App component
function App() {
  return (
    <>
    <div className="main relative overflow-hidden">

    <Header/>
    <BehanceList/>
    <Footer/>
    </div>
    </>
  );
}

// Exporting App component
export default App;
