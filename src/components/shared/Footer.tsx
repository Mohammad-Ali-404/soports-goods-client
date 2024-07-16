import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets//vollyball.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#303131] to-[#3a3b3b] py-12 md:px-0 px-5 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <Link to={"/"} className="flex items-center gap-2 text-white">
              <img src={logo} alt="footer logo" className="invert w-8" />
              <h1 className="font-black text-2xl">SPORTHAVEN</h1>
            </Link>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
            <Link to={"/"} className=" hover:underline">
              Home
            </Link>
            <Link to={"/all-products"} className=" hover:underline">
              All Product
            </Link>
            <Link to={"/about-us"} className=" hover:underline">
              About Us
            </Link>
          </nav>
          <div className="flex items-center justify-end gap-4 text-slate-100">
            <Link
              to={"https://www.facebook.com/alimohammadjhd"}
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link
              to={"https://www.instagram.com/mohammadali.09/"}
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-white">
          &copy; 2024 Sports Goods. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
