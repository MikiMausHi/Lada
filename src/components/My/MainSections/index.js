import React from 'react';
import {Link} from 'react-router-dom';


/**
 * Main sections
 */
export default function MainSections() {
  return (
    <div className="tile">
    <div className="tile-container">
     <p>Основные разделы</p>
     <div className="tile-list">
         <Link  to='/услуги'   className="tile-list__link block1" id="block3l">
                 <div className="title-tile" >Услуги</div>
                 <div className="descr-tile">Онлайн запись</div>
         </Link>

         <Link  to='/акции' className="tile-list__link block1" > 
                 <div className="title-tile">Акции</div>
                 <div className="descr-tile">Скидки и обследование</div>
         </Link>

         <Link to='/контакты' className="tile-list__link block2" >
                 <div className="title-tile">Контакты</div>
                 <div className="descr-tile">Адреса наших клиник</div>
         </Link>

         <Link to='/лечение-за-рубежом' className="tile-list__link block2" id="block2l">
                 <div className="title-tile">Лечение за рубежом</div>
                 <div className="descr-tile">Заполнить анкету</div>
         </Link>
         <Link  to='/обратная-связь'   className="tile-list__link block3" id="block3l" >
                 <div className="title-tile">Задать вопрос</div>
                 <div className="descr-tile">Быстрый ответ от специальсти</div>
         </Link>
         <Link  to='/онлайн-запись' className="tile-list__link block3" > 
                 <div className="title-tile">Онлайн приём</div>
                 <div className="descr-tile">Онлайн консультации</div>
         </Link>
     </div>
    </div>
</div>
  );
};