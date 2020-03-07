import React from "react";
import Helmet from "react-helmet";
import "./styles.scss";
import Breadcrumbs from "../../Common/Breadcrumbs/index.js";
import { chatBreadcrumbs } from "../../../core/utils/testData.js";
import Scroll from "../../My/ScrollTop/index.js";
export default function Chat() {
  return (
    <div className="section">
      <Helmet>
        <title>Обратная связь - ЛадаМед</title>
        <meta name="description" content="Chat" />
        <meta name="keywords" content="Chat" />
      </Helmet>
      <Breadcrumbs items={chatBreadcrumbs} />
      <Scroll />
      <form className="form-chat">
        <h1>Обратная связь</h1>
        <div className="fio">
          <input required className="textboxs" placeholder="Фамилия" />
          <input required className="textboxs" placeholder="Имя" />
          <input className="textbox" placeholder="Отчество" />
        </div>
        <div>
          <input
            required222
            className="textboxs"
            type="tel"
            placeholder="Телефон"
          />
        </div>
        <div>
          <input
            required
            className="textboxs"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea required className="messages" placeholder="Сообщение:" />
        </div>
        <button className="button-form-record">Отправить</button>
      </form>
    </div>
  );
}
