import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login/login';
import MainPage from './pages/mainPage';
import Register from './pages/Register/register';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';
import ScrollToTop from './components/ScrollToTop/buttonScrollToTop';
import { Provider } from 'react-redux';
import store from './pages/Articles/redux/store';
import SupportPopUp from './components/SupportUs/SupportPopUp';


const App = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <Router>
                    <div className="container-fluid p-0 d-flex flex-column min-vh-100 overflow-x-hidden">
                <Navbar />
                
                        <div className="mainPage flex-grow-1">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/support-popup" element={<SupportPopUp />} />
                            <Route
                                path="/mainPage"
                                element={
                                    <PrivateRoute path="/MainPage">
                                        <MainPage />
                                    </PrivateRoute>
                                }
                            />

                            <Route path="/*" element={<Login />} />
                        </Routes>
                    </div>

                    <div className="footer">
                        <Footer />
                        <ScrollToTop/>
                    </div>
                </div>
                
                
                </Router>
            </Provider>
        </CookiesProvider>
    );
};

// This is the entry point of the app. It creates the root of your application and it renders the React component `App` inside an HTML element identified with the id `root`.
createRoot(document.getElementById('root')).render(<App />)
