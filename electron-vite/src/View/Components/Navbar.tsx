import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Info</Link>
      <Link to={"/files"}>Files</Link>
      <Link to={"/recording"}>Recording</Link>
    </div>
  )
}

export default Navbar