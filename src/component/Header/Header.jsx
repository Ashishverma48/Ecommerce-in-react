import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/logo.png'
import Avatar from '@mui/material/Avatar';
import './style.scss'
const Header = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      
        <ul className="navMenu">
          <li>
            Home
          </li>
          <li>
            Category 
          </li>
          <li>
            Collection
          </li>
          <li>
            Contact Us
          </li>
        </ul>
      
      <div className="navIcon"> 
        <Badge badgeContent={78} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
        <MenuIcon />
        <Avatar>A</Avatar>
      </div>
    </nav>
  );
};

export default Header;
