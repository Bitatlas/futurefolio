import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ThemeContextProvider from './theme/ThemeContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import AIPage from './pages/AI';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Layout>
          <Box sx={{ height: '100vh', overflow: 'auto' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ai" element={<AIPage />} />
              {/* Add other sector routes as they are implemented */}
            </Routes>
          </Box>
        </Layout>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
