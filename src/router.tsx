import { createBrowserRouter } from 'react-router-dom';
import { IndexPage, ProjectPage } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/project/:slug', element: <ProjectPage /> },
]);

export default router;