import React from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function HeaderMenu({ isOpen, navTo, onClose }) {
  return (
    <div
      className={`header-menu${isOpen ? " header-menu-open" : ""}`}
      onClick={onClose}
    >
      <section className="section header-menu-wrapper">
        <GridRow>
          <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <ul className="header-menu-menu">
              <li className="heade-menu-menu-Link">Предметы</li>
              <ul className="header-menu-submenu">
                <li>
                  <Link className="menu-link-header" to="/мц-«ладушки»">
                    МЦ &laquo;Ладушки&raquo;
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/контакты">
                    Контакты филиалов
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/наши-специалисты">
                    Специалисты
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/услуги">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/о-нас/">
                    О нас
                  </Link>
                </li>
              </ul>
            </ul>
          </GridCol>
          <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <ul className="header-menu-menu">
              <li className="heade-menu-menu-Link">Цель</li>
              <ul className="header-menu-submenu">
                <li>
                  <Link className="menu-link-header" to="/онлайн-запись/">
                    Онлайн запись
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/лечение-за-рубежом/">
                    Лечение за рубежом
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/полезная-информация/">
                    Полезная информация
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/вакансии/">
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/обратная-связь/">
                    Обратная связь
                  </Link>
                </li>
              </ul>
            </ul>
          </GridCol>
          <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <ul className="header-menu-menu">
              <li className="heade-menu-menu-Link">Наши правила</li>
              <ul className="header-menu-submenu">
                <li>
                  <Link className="menu-link-header" to="нормативные-документы">
                    Нормативные документы
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu-link-header"
                    to="/корпоративным-клиентам"
                  >
                    Корпоративным клиентам
                  </Link>
                </li>
                <li>
                  <Link className="menu-link-header" to="/надзорные-органы/">
                    Надзорные органы
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu-link-header"
                    to="/политика-обработки-персональных-данных"
                  >
                    Политика обработки
                    <br />
                    персональных данных
                  </Link>
                </li>
              </ul>
            </ul>
          </GridCol>
        </GridRow>
      </section>
    </div>
  );
}
