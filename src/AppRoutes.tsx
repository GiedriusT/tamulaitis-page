import { Route, Routes } from 'react-router-dom';
import { IndexPage, ProjectPage, SecretPage } from './pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/project/:slug' element={<ProjectPage />} />
      <Route path='/secret/:slug' element={<SecretPage />} />
    </Routes>
  );
};

export default AppRoutes;