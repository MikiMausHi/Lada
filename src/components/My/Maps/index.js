import React from "react";
import Type from "prop-types";
/**
 * Maps
 */
export default function Maps({ items = [] }) {
  return (
    <>
      {items.map(item => (
        <div key={item.title}>
          <h3 className="maps-item">{item.title}</h3>
          <iframe
            src={item.src}
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
          ></iframe>
        </div>
      ))}
    </>
  );
}

Maps.propTypes = {
  items: Type.array.isRequired
};

Maps.defaultProps = {
  className: ""
};
