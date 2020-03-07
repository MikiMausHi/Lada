import React from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function MainSections() {
  return (
    <div className="main-sections">
      <h2 className="text-center">Основные разделы</h2>
      <GridRow>
        <GridCol
          width={{ mobile: 12, tablet: 3, desktop: 3 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/услуги">
            <div className="main-sections-item item1">
              <p className="main-sections-lesson">Услуги</p>
              <p className="main-sections-heading">Онлайн запись</p>
            </div>
          </NavLink>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 3, desktop: 3 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/акции">
            <div className="main-sections-item item2">
              <p className="main-sections-lesson">Акции</p>
              <p className="main-sections-heading">Скидки и обследование</p>
            </div>
          </NavLink>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/контакты">
            <div className="main-sections-item item3">
              <p className="main-sections-lesson">Контакты</p>
              <p className="main-sections-heading">Адреса наших клиник</p>
            </div>
          </NavLink>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/лечение-за-рубежом">
            <div className="main-sections-item item4">
              <p className="main-sections-lesson">Лечение за рубежом</p>
              <p className="main-sections-heading">Заполнить анкету</p>
            </div>
          </NavLink>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 3, desktop: 3 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/обратная-связь">
            <div className="main-sections-item item5">
              <p className="main-sections-lesson">Задать вопрос</p>
              <p className="main-sections-heading">
                Быстрый ответ от специальстик
              </p>
            </div>
          </NavLink>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 3, desktop: 3 }}
          className="m-b20"
        >
          <NavLink className="link link_third" to="/онлайн-запись">
            <div className="main-sections-item item6">
              <p className="main-sections-lesson">Онлайн приём</p>
              <p className="main-sections-heading">Онлайн консультации</p>
            </div>
          </NavLink>
        </GridCol>
      </GridRow>
    </div>
  );
}
