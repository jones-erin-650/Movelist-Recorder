import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navbar-center bg-base-300">
        <Link to={"/"} className="btn btn-ghost text-xl">Info</Link>
        <Link to={"/files"} className="btn btn-ghost text-xl">Files</Link>
        <Link to={"/recording"} className="btn btn-ghost text-xl">Recording</Link>
      </div>
    </>



    // <div>
    //   <Link to={"/"}>Info</Link>
    //   <Link to={"/files"}>Files</Link>
    //   <Link to={"/recording"}>Recording</Link>
    // </div>
  )
}

export default Navbar