import { Input } from "../InputHeader/InputHeader";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src="./img/logo.png" alt="logo" />
      </div>
      <div className="header__sidebar">
        <img src="./img/sidebar.svg" alt="sidebar" />
      </div>
      <div className="header__box">
        <div className="header__search-box">
          <Input type="text" placeholder="Поиск" />
          <img className="header__search" src="./img/search.svg" alt="search" />
        </div>
        <div className="header__avatar-box">
          <img className="header__avatar" src="./img/content-avatar.png" alt="avatar" />
          <span className="header__login">Максим Галактионов</span>
          <div className="header__settings-box">
            <img className="header__settings" src="./img/settings.svg" alt="settings" />
          </div>
        </div>
      </div>
    </header>
  );
};
