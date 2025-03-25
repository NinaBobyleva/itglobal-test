import "./form.scss";
import { Button } from "../Button/Button.jsx";
import { ButtonBlue } from "../ButtonBlue/ButtonBlue.jsx";

export const Form = () => {
  return (
    <form className="form">
      <header className="form__header">
        <div className="form__subtask">
          <span className="form__subtitle">Подзадача</span>
          <Button title="Создать" />
        </div>
        <div className="form__btn">
          <ButtonBlue title="Сохранить" />
          <Button title="Сохранить и выйти" />
        </div>
      </header>
      <section className="form__main">
        <div></div>
      </section>
    </form>
  );
};
