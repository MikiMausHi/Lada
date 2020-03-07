import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { NavLink } from "react-router-dom";
import Button from "arui-feather/button";
import "./styles.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default class extends React.Component {
  render() {
    return (
      <div className="banner-home">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={20000}
        >
          <div data-src="https://sun9-64.userapi.com/c857332/v857332259/65df1/nlTKKOD2SLg.jpg">
            <button className="button button_secondary" id="button-home">
              <NavLink to="/онлайн-запись" id="home-link">
                <h3>Записаться</h3>
              </NavLink>
            </button>
          </div>

          <div data-src="https://sun9-45.userapi.com/c204616/v204616810/6540d/6TGgh7gXLRM.jpg">
            <button className="button button_secondary" id="button-home">
              <NavLink to="/онлайн-запись" id="home-link">
                <h3>Записаться</h3>
              </NavLink>
            </button>
          </div>

          <div data-src="https://sun9-48.userapi.com/c857124/v857124259/c34f7/9Atoll7p-Co.jpg">
            <button className="button button_secondary" id="button-home">
              <NavLink to="/онлайн-запись" id="home-link">
                <h3>Записаться</h3>
              </NavLink>
            </button>
          </div>
        </AutoplaySlider>
      </div>
    );
  }
}
