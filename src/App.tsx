import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';
import { queryClient } from './services/queryClient';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<div className="h-screen w-full bg-gray-100 animate-pulse"></div>}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/pokemon/:id" element={<DetailPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;