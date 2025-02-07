import React from 'react'
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { avatar, setting } from '../../images';
import { Link, NavLink } from 'react-router-dom';
import './styles/sidebar.scss';
interface UNavigationMenu {

}

const NavigationMenu: React.FC<UNavigationMenu> = ({

}: UNavigationMenu) => {
  return (
    <Container>
      <Navbar className='vh-100 flex-column p-2 mt-4'>
        <Link to="/" style={{ position: 'relative' }}>
          <Image
            src={avatar}
            className='border'
            alt="Профиль"
            roundedCircle
            width={80}
            height={80}
          ></Image>
          <Image
            src={setting}
            style={{ position: 'absolute', top: '55%', right: -5 }}
            className='border'
            alt="icon-setting"
            roundedCircle
            width={30}
            height={30}
          />
        </Link>

        <Nav className="flex-column w-100 text-center mt-4">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: any }) => isActive ? "nav-sidebar_active mt-3" : "mt-3"}
          >
            <span>Приход</span>
          </NavLink>
          <NavLink
            className={({ isActive }: { isActive: any }) => isActive ? "nav-sidebar_active mt-3" : "mt-3"}
            to="/groups"
          >
            <span>Группы</span></NavLink>
          <NavLink
            className={({ isActive }: { isActive: any }) => isActive ? "nav-sidebar_active mt-3" : "mt-3"}
            to="/products"
          ><span>Продукты</span></NavLink>
          <NavLink
            className={({ isActive }: { isActive: any }) => isActive ? "nav-sidebar_active mt-3" : "mt-3"}
            to="/users"
          >
            <span>Пользователи</span></NavLink>
          <NavLink
            className={({ isActive }: { isActive: any }) => isActive ? "nav-sidebar_active mt-3" : "mt-3"}
            to="/setting"
          >
            <span>Настройки</span></NavLink>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavigationMenu