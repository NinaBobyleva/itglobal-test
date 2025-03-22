import { InputSidebar } from "../InputSidebar/InputSideBar";
import { menuData } from "../../menuData.js";
import "./sidebar.scss";
import { Menu } from "../Menu/Menu";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__box">
        <img src="./img/sidebar.svg" alt="sidebar" />
        <img src="./img/star.svg" alt="#" />
      </div>
      <div className="sidebar__menu-box">
        <div className="sidebar__search">
          <InputSidebar />
          <div className="sidebar__svg-box">
            <img className="sidebar__svg" src="./img/no-pin.svg" alt="#" />
          </div>
        </div>
        <div className="sidebar__menu">
          {menuData.map((el) => (
            <Menu key={el.id} title={el.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
