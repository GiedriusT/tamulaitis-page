import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import router from './router';

const App: React.FC = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
