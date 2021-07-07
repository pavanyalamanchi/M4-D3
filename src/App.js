import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import JumboContent from './components/welcome'
import LatestRelease from './components/latestRelease'
import Warning from './components/WarningSign'
import MyBadge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.min.css'
import items from './data/fantasy.json'
import BookList from './components/BookList'

function App() {
  return (
    <>
    <Navbar />
    <JumboContent/>
    <Warning text='this is a warning sign'/>
    <MyBadge color='success' text='Success'/>
    <BookList items={items}/>
    <LatestRelease/>
    <Footer />
    </>
  );
}

export default App;
