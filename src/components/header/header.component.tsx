// Icons
import { BsCart3 } from 'react-icons/bs';
// Css
import './header.styles.css';

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">CLOTHING</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <span style={{ marginLeft: 5 }}>5</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
