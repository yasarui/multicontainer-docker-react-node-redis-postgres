import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { OtherPage } from './components/OtherPage';
import { FibPage } from './components/FibPage';

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div className='container'>
          <Route exact path="/" component={FibPage} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>

  );
}

export default App;
