import React from "react";
import Type from "prop-types";
import "./styles.scss";
export default function ReviewsBreadcrumbs({ items = [] }) {
  return (
    <div className="stocks-new">
      {items.map(item => (
        <div key={item.title} className="stocks-block">
          {item.title ? (
            <h2 className="title-stocks" key={item.title}>
              {item.title}
            </h2>
          ) : (
            <h2 className="title-stocks" key={item.title}>
              Благодарный пациент
            </h2>
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
            <p className="descr-stocks">Отзыв</p>
          )}
          <hr className="hr" />
        </div>
      ))}
    </div>
  );
}
ReviewsBreadcrumbs.propTypes = {
  items: Type.array.isRequired
};
