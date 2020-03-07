import React from "react";
import { NavLink } from "react-router-dom";
import Plate from "arui-feather/plate";
import Type from "prop-types";

export default function DoctorsBlock({ doctor }) {
  const name = doctor.title;
  const fio = name.split(" ");
  return (
    <Plate className="doctors-block">
      <div className="doctors-content">
        <NavLink to="/онлайн-запись/">
          <img className="doctors-image" src={doctor.photo} alt="name" />
        </NavLink>
        <div className="doctors-skills-wrap">
          <h3 className="doctors_skills-name">
            <NavLink className="link link_third" to="/онлайн-запись/">
              {fio[0]}
              <br />
              {fio[1]} {fio[2]}
            </NavLink>
          </h3>
          <p className="doctors_skills-subject">Направление:</p>
          <p className="doctors_prof">{doctor.subjects}</p>
          <p className="doctors_skills-subject">Специализация:</p>
          <ul className="skills-price" id="list-doct">
            {doctor.spec.map(item => (
              <li key={item.sbj}>
                <p>{item.sbj}</p>
              </li>
            ))}
          </ul>
          <p className="doctors_skills-subject">Филиал:</p>
          <ul className="skills-price" id="list-doct">
            {doctor.fil.map(item => (
              <li key={item.sbj}>
                <p>{item.filial}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="button-doctors">
        <NavLink to="/онлайн-запись" id="home-link">
          <h3>Записаться</h3>
        </NavLink>
      </button>
    </Plate>
  );
}

DoctorsBlock.propTypes = {
  doctor: Type.object.isRequired
};
