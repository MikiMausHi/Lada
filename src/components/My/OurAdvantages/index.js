import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import HomeLogo4 from '../../../theme/images/home/home-logo4.png';
import HomeLogo5 from '../../../theme/images/home/home-logo5.png';
import HomeLogo6 from '../../../theme/images/home/home-logo6.png';


/**
 * Our advantages
 */
export default function OurAdvantages() {
  return (
    <div className="our-advantages">
      <h2 className="text-center top">Наши преимущества</h2>
      <GridRow gutter={ { mobile: 24, tablet: 24, desktop: 24 } }>
        <GridCol width={{ mobile: 10, tablet: 3, desktop: 3  }} className="our-advantages-item">
          <Link pseudo><img src={HomeLogo4} alt="" />
            <p className="our-advantages-item-heading">Наши<br />специалисты</p></Link>
          <p className="our-advantages-item-description">Первоклассные квалифицированные педагоги в самых различных областях помогут в развитии, закреплении, и освоении необходимых навыков.</p>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 3, desktop: 3  }} className="our-advantages-item">
          <Link pseudo><img src={HomeLogo5} alt="" />
          <p className="our-advantages-item-heading">Удобство<br />работы</p></Link>
          <p className="our-advantages-item-description">Широкий набор инструментов и легкость использования системы позволяет быстро создать собственный гибкий график и подстраивать процесс под себя.</p>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 3, desktop: 3  }}className="our-advantages-item">
          <Link pseudo><div className="our-advantages-img-6"><img src={HomeLogo6} alt="" /></div>
          <p className="our-advantages-item-heading">Проверенные<br />методологии</p></Link>
          <p className="our-advantages-item-description">На нашем портале применяются только классические, проверенные временем методики и тщательный подход к каждому ученику.</p>
        </GridCol>
      </GridRow>
    </div>
  );
};
