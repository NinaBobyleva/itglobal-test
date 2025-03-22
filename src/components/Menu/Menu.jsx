import "./menu.scss";

export const Menu = ({ title }) => {
  return (
    <nav className="menu">
      <img src="./img/icons.svg" alt="#" />
      <p className="menu__title">{title}</p>
    </nav>
  );
};
