import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div data-theme="light" className='max-w-7xl mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
