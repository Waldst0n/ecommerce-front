// Icons
import { BsCart3 } from 'react-icons/bs';
// Css
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <span style={{ marginLeft: 5 }}>5</span>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
