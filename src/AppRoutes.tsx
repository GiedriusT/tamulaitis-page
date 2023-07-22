import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallback from './components/SuspenseFallback/SuspenseFallback';
import IndexPage from './pages/IndexPage';

const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));
const SecretPage = React.lazy(() => import('./pages/SecretPage'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/project/:slug' element={<React.Suspense fallback={<SuspenseFallback />}><ProjectPage /></React.Suspense>} />
      <Route path='/secret/:slug' element={<React.Suspense fallback={<SuspenseFallback />}><SecretPage /></React.Suspense>} />
    </Routes>
  );
};

export default AppRoutes;