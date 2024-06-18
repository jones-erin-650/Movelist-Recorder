import { Route, Routes} from "react-router-dom";

import Info from '../Routes/Info.tsx'
import Files from '../Routes/Files.tsx'
import Recording from '../Routes/Recording.tsx'
import Navbar from "./Navbar.tsx";

export function RouterWrapper() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/files" element={<Files />} />
          <Route path="/recording" element={<Recording />} />
        </Routes>
      </div>
    </>
  )
}