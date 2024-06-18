import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Info from '../Routes/Info.tsx'
import Files from '../Routes/Files.tsx'
import Recording from '../Routes/Recording.tsx'

export const router = createBrowserRouter([
  { path: "/", element: <Info /> },
  { path: "/files", element: <Files /> },
  { path: "/recording", element: <Recording /> },
]);