import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import JumboContent from './components/welcome'
import LatestRelease from './components/latestRelease'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Navbar />
    <JumboContent/>
    <LatestRelease/>
    <Footer />
    </>
  );
}

export default App;
