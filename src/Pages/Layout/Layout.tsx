import React from 'react';
import { Outlet } from 'react-router-dom';
import TopMenuContainer from '../../Components/TopMenu/TopMenuContainer';
import NavigationMenuContainer from '../../Components/NavigationMenu/NavigationMenuContainer';
import styles from './styles/layout.module.scss';
import ModalContainer from '../../Components/Modal/ModalContainer';

const Layout: React.FC = () => {
    return (
        <div className={styles["layout__container"]}>

            <div className={styles["layout__header"]}>
                <TopMenuContainer />
            </div>
            <div className={styles["layout__sidebar"]}>
                <NavigationMenuContainer />
            </div>
            <main className={styles["layout__body"]}>
                <ModalContainer />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout