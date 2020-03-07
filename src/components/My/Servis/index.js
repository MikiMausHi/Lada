import React from "react";
import Type from "prop-types";
import { NavLink } from "react-router-dom";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import "./styles.scss";

export default function ServisBreadcrumbs({ items = [] }) {
  return (
    <div>
      <GridRow>
        <GridCol key="Услуги" width={{ mobile: 12, tablet: 9, desktop: 12 }}>
          {items.map(item => (
            <div key={item.title} className="stocks-block">
              {item.title ? (
                <NavLink
                  className="title-stocks"
                  key={item.title}
                  to={item.link}
                >
                  {item.title}
                </NavLink>
              ) : (
                <span className="title-stocks" key={item.title}>
                  {item.title}
                </span>
              )}
              {item.data ? (
                <p className="data-stocks">{item.data}</p>
              ) : (
                <span className="data-stocks" key={item.data}>
                  Не известно
                </span>
              )}
              {item.descrbold ? (
                <p className="descr-stocks_bold">{item.descrbold}</p>
              ) : (
                <p className="descr-stocks_bold">Описание</p>
              )}
              {item.src ? (
                <NavLink className="link-stocks" key={item.link} to={item.link}>
                  Подробнее...
                </NavLink>
              ) : (
                <a
                  className="link-stocks"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.href}
                >
                  Скачать прайс услуг
                </a>
              )}
            </div>
          ))}
        </GridCol>
      </GridRow>
    </div>
  );
}

ServisBreadcrumbs.propTypes = {
  items: Type.array.isRequired
};
