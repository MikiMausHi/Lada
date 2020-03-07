import React from "react";
import Type from "prop-types";
import { NavLink } from "react-router-dom";
import "./styles.scss";
export default function StocksBreadcrumbs({ items = [] }) {
  return (
    <div className="stocks-new">
      {items.map(item => (
        <div key={item.title} className="stocks-block">
          {item.title ? (
            <NavLink className="title-stocks" key={item.title} to={item.link}>
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
          {item.descr ? (
            <p className="descr-stocks">{item.descr}</p>
          ) : (
            <p className="descr-stocks"></p>
          )}
          {item.link ? (
            <NavLink className="link-stocks" key={item.link} to={item.link}>
              Подроблнее...
            </NavLink>
          ) : (
            <span className="link-stocks" key={item.link}></span>
          )}
        </div>
      ))}
    </div>
  );
}

StocksBreadcrumbs.propTypes = {
  items: Type.array.isRequired
};
