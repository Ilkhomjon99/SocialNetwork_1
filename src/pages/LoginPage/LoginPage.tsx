import "./LoginPage.scss";
import { Button } from "../../components/UI/Button/Button";
import {Input} from "../../components/UI"
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/typography/Heading/Heading";


export const LoginPage = () => {

  return (
    <div className="LoginPage">
     <Heading type="h1" text="Авторизация" />
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Button text={"Войти"}/>
       
      </form>
      <AppLink text="Забыли пароль?" href="#"/>
      <AuthWith/>
    </div>
  );
};
