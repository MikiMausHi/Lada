import React from "react";
import Type from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * Breadcrumbs
 */
export default function SupersBreadcrumbs({ items = [] }) {
  return (
    <div className="section">
      <h2 className="section-title"> Надзорные органы </h2>
      <p className="section-descr">
        {" "}
        Надзорные органы, осуществляющие контроль деятельности ЛПУ
      </p>
      <div className="section-block">
        <p className="title-super"> Наименование</p>
        <p id="adress" className="title-super">
          Адресс
        </p>
        <p className="title-super">Телефон</p>
      </div>
      {items.map(item => (
        <div className="partners-block">
          <hr className="line" />
          <div className="section-block">
            <div className="block-inf">
              {item.title ? (
                <p className="block-name" key={item.title}>
                  {item.title}
                </p>
              ) : (
                <p className="block-name" key={item.title}>
                  -
                </p>
              )}

              {item.link ? (
                <a
                  className="block-link"
                  key={item.link}
                  href={item.link}
                  target="_black"
                >
                  {item.link}
                </a>
              ) : (
                <p className="block-link" key={item.link}>
                  -
                </p>
              )}
            </div>
            {item.adress ? (
              <p className="block-adress" key={item.adress}>
                {item.adress}
              </p>
            ) : (
              <p className="block-adress" key={item.adress}>
                Необходимо уточнить адресс
              </p>
            )}
            {item.phone ? (
              <p className="block-phone" key={item.phone}>
                {item.phone}
              </p>
            ) : (
              <p className="block-phone" key={item.phone}>
                Необходимо уточнить номер телефона
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
SupersBreadcrumbs.propTypes = {
  items: Type.array.isRequired
};
