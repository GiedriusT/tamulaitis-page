import { Route, Routes } from 'react-router-dom';
import { IndexPage, ProjectPage } from './pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/project/:slug' element={<ProjectPage />} />
    </Routes>
  );
};

export default AppRoutes;