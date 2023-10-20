import { features } from "../constants";
import styles, { layout } from "../style";
import { discount, card, logo } from "../assets";

import Button from "./Button";
import "./Business.css";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

const Business = () =>  (
  // <div>
  // <section id="features" className={`${layout.section} valor`}>
  //  <div className={`${layout.sectionInfo}`}>
  //     <h2 className={styles.heading2}>
  //       You do the business, <br className="sm:block hidden" /> we’ll handle
  //       the money.
  //     </h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //       With the right credit card, you can improve your financial life by
  //       building credit, earning rewards and saving money. But with hundreds
  //       of credit cards on the market.
  //     </p>

  //     <Button styles={`mt-10`} />
  //   </div>

  //   <div className={`${layout.sectionImg} flex-col`}>
  //     {features.map((feature, index) => (
  //       <FeatureCard key={feature.id} {...feature} index={index} />
  //     ))}
  //   </div>
  // </section>
  // </div>
  <div>
    <div class="content-wrap">
				<div class="content">
					<div class="title-wrap">
						<span class="title title--up">Foot</span>
						<span class="title title--down">Print</span>
					</div>
				</div>
				<div class="content content--layout content--layout-1">
					{/* <svg class="content__img content__img--1" width="896" height="1344" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 896 1344">
					  <defs>
					    <filter id="displacementFilter">
					      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
					      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
					    </filter>
					    <mask id="circleMask">
					      <circle 
                  cx="50%" 
                  cy="50%"
                  r="0" 
                  r="50" 
                  data-value-final="820"
                  fill="white"                     
                  class="mask" 
                  style="filter: url(#displacementFilter);" />
					    </mask>
					  </defs>
					  <image href="/src/assets/1.jpg" width="896" height="1344" mask="url(#circleMask)" />
					</svg> */}

          <svg
      className="content__img content__img--1"
      width="896"
      height="1344"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 896 1344"
    >
      <defs>
        <filter id="displacementFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            result="noise"/>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"/>
        </filter>
        <mask id="circleMask">
          <circle
            cx="50%"
            cy="50%"
            r="0"
            data-value-final="820"
            fill="white"
            className="mask"
            style={{ filter: 'url(#displacementFilter)' }}/>
        </mask>
      </defs>
      <img
        xlinkHref={"/src/assets/1.jpg"}
        width="896"
        height="1344"
        mask="url(#circleMask)"/>
    </svg>
					<p class="content__text">As darkness cloaked the forsaken city, the crew huddled together, their eyes darting nervously into the murky abyss.</p>
				</div>
			</div>
  </div>

);

export default Business;
