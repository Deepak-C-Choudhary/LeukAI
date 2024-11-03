import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/footer';
import HomePage from './pages/HomePage';
import HowToUsePage from './pages/HowToUsePage';
import LoginPage from "./pages/LoginPage";
import UploadPage from './components/UploadPage';
import { DetailsPage } from './pages/DetailsPage';
import { ThemeProvider } from "./ui-improvements/theme";
import { SupportPage } from './pages/SupportPage';
import  AccountCreationPage from  './pages/AccountCreationPage';

const App = () => (
  <Router>
    <ThemeProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<AccountCreationPage />} />
      </Routes>
      {/* <Footer/> */}
    </ThemeProvider>
  </Router>
);

export default App;
