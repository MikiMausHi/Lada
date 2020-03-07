import React from 'react';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './styles.scss';

/**
 * Home banner
 */
export default function HomeBanner({ banner }) {
  return (
    <GridRow className="home-banner">
      <GridCol width={{ mobile: 12, tablet: 6 }}>
        <h1>{banner.title}</h1>
        <p>{banner.txt}</p>
        <Button className="button button_secondary">Выбрать учебный курс</Button>
      </GridCol>
      <GridCol width={{ mobile: 0, tablet: 6 }} className="vetcenter">
        <img className="home-banner-image" src={banner.img} alt="" />
      </GridCol>
    </GridRow>
  );
};
