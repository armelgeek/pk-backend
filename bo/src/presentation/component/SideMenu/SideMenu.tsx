/* eslint-disable no-unused-expressions */
// import useState hook to create menu collapse state
import * as React from 'react';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useHistory } from "react-router-dom";
import {
  Menu,
  MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader,
} from 'react-pro-sidebar';
// import sidebar css from react-pro-sidebar module and our custom css
import 'react-pro-sidebar/dist/css/styles.css';
import achat from '../../../assets/img/icon_BO/achat.svg';
import controle from '../../../assets/img/icon_BO/controle.svg';
import distribution from '../../../assets/img/icon_BO/distribution.svg';
import calendar from '../../../assets/img/icon_BO/ic_calendar.png';
import inscription from '../../../assets/img/icon_BO/inscription.svg';
import lot from '../../../assets/img/icon_BO/lot.svg';
import parametre from '../../../assets/img/icon_BO/parametre.svg';
import profil from '../../../assets/img/icon_BO/profil.svg';
import './Header.css';
import logo from '../../../assets/img/logo.png';

import { dataTDO } from "../../../data";
import { LocalStorageKeys } from '../../../data/constants/LocalStorageKeys';
import { initialAuthState, useAuth } from '../../../redux/ducks/auth';

const icons = {
  parametre,
  calendar,
  achat,
  controle,
  distribution,
  lot,
  profil,
  inscription,
};

// eslint-disable-next-line react/prop-types
export const SideMenu = ({ role }) => {
  // create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    // condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const history = useHistory();
  const { updateCredentials, state } = useAuth();
  const connectedUser = JSON.parse(localStorage.getItem(LocalStorageKeys.credentials));
  const handleDisconnect = () => {
    localStorage.removeItem(LocalStorageKeys.credentials);
    updateCredentials(initialAuthState.credentials);
    history.replace('/auth');
  };

  const routes = Object.keys(dataTDO).filter((entity) => entity && dataTDO[entity]?.role <= role && dataTDO[entity]?.operations?.find(({ method, route }) => method && route)).map((entity) => {
    const {
      route, iconBo,
    } = dataTDO[entity];
    return (
      <NavLink
        key={`gestion-${entity}`}
        to={`/app/${route}`}
        className={({ isActive, isPending }: any) =>
          isActive
            ? "active"
            : isPending
              ? "pending"
              : ""
        }
      >
        <div className="menu-item mt-2">
          <button className="flex justify-start items-center space-x-6  text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span className="text-base leading-4  ">{entity}</span>
          </button>
        </div>
      </NavLink>
    );
  });

  return (
    <>
      <div id="sideBar" className="transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 flex-col">
        <div className="p-4 hidden w-full xl:flex justify-center  items-center space-x-3 border-gray-600 border-b space-y-3 pb-5 ">
          <img className="dashboard-logo" alt="PokerApply logo" src={logo} />
        </div>
        <div
          id="header"
        >
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarContent className="px-2">
              <NavLink
                to={`/app`}
                className={({ isActive, isPending }: any) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                <div className="menu-item mt-2">
                  <button className="flex justify-start items-center space-x-6  text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg className="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="text-base leading-4  ">Tableau de bord</span>
                  </button>
                </div>
              </NavLink>
              {...routes}
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <div onClick={handleDisconnect}>
                  <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                </div>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </div>
    </>
  );
};
