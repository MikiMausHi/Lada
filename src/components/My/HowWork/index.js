import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import HowWorkImage from '../../../theme/images/home/newMO.jpg';


/**
 * How work
 */
export default function HowWork() {
  return (
    <div className="how_work">
      <h2 className="how_work-title">Открытие новой клиники</h2>
      <GridRow gutter={ { mobile: 24, tablet: 24, desktop: 24 } }>
        <GridCol width={{ mobile: 12, tablet: 6 }}>
          <img className="how_work-image" src={HowWorkImage} alt="" />
        </GridCol>
        <GridCol width={{ mobile:12, tablet: 12 }}>
          <div className="how_work-content">
            <p className="bold18">
            Уважаемые посетители, у нас для вас хорошая новость.<br/> Новый медицинский офис компании начнет принимать пациентов в Сыктывкаре по адресу:<b> г.Сыктывкар, ул. Первомайская, д. 62.</b>
            </p>
            <p>
            Мы предлагаем более 2000 видов лабораторных анализов. Современное штрих-кодирование пробирок обеспечивает идентификацию каждой пробы и исключает возможность перепутать образцы. Исследования проводятся в собственном лабораторном комплексе ИНВИТРО в Москве, который работает круглосуточно. Передовое оборудование позволяет выполнять более 150 000 тестов ежедневно. Все результаты проходят двойное подтверждение – технологическое и медицинское.
            </p>
            {/* <p className="bold18">
              Вам не надо устанавливать дополнительные программы - все уже есть в браузере!
            </p> */}
          </div>
        </GridCol>
      </GridRow>
    </div>
  );
};
