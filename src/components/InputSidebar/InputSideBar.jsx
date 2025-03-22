import "./inputSidebar.scss";

export const InputSidebar = () => {
  return (
    <div className="inputSidebar">
      <input className="inputSidebar__search" type="search" placeholder="Поиск по меню" />
      <img className="inputSidebar__svg" src="./img/padding.svg" alt="#" />
    </div>
  );
};
