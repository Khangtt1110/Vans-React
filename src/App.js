import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoutesPage } from '~/config/RoutesPage';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {RoutesPage.map((route, index) => {
                        const Layout = route.layout;
                        const Page = route.component || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
