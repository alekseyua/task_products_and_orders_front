import React, { Suspense } from 'react';
import './styles/main.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
