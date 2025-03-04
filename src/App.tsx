import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';
import { queryClient } from './services/queryClient';
import Header from './components/Header';
import LoadingSpinner from './components/ui/LoadingSpinner';

const PokemonList = lazy(() => import('./components/PokemonList'));
const PokemonDetail = lazy(() => import('./components/PokemonDetail'));

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<PokemonList />} />
                  <Route path="/pokemon/:id" element={<PokemonDetail />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;