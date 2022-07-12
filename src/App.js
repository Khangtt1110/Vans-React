import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/components/header/Header';
import RoutesPage from '~/config/RoutesPage';
import Footer from '~/components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Header /> */}
                <RoutesPage />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
