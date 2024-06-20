import { Route, Routes} from "react-router-dom";

import Info from '../Pages/Info.tsx'
import Files from '../Pages/Files.tsx'
import Recording from '../Pages/Recording.tsx'
import Navbar from "./Navbar.tsx";

export function RouterWrapper() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-4 mx-auto">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/files" element={<Files />} />
          <Route path="/recording" element={<Recording />} />
        </Routes>
      </div>
    </>
  )
}