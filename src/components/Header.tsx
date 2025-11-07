import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="SANMI LAW FURNITURE Logo" 
              className="h-12 w-12 object-cover rounded-lg"
            />
            <span className="text-xl font-serif font-bold text-foreground">
              SANMI LAW FURNITURE
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
