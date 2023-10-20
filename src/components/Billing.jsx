import { apple, bill, google, anime} from "../assets";
import styles, { layout } from "../style";
import './Billing.css';

const Billing = () => (
  // <section id="product" className={layout.sectionReverse}>
  //   <div className={layout.sectionImgReverse}>
  //     <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

  //     {/* gradient start */}
  //     <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
  //     <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  //     {/* gradient end */}
  //   </div>

  //   <div className={layout.sectionInfo}>
  //     <h2 className={styles.heading2}>
  //       Easily control your <br className="sm:block hidden" /> billing &
  //       invoicing
  //     </h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //       Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
  //       aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
  //       placerat.
  //     </p>

  //     <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
  //       <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
  //       <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
  //     </div>
  //   </div>
  // </section>
  <div>
    <section id="features" className={`${layout.section} valo1`}>
    <div className="text1 text-white"><h1 className="FortHead">VALORANT</h1>
      <p className="paragraph">   
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim
        commodo consequat.
      </p>
      <button className="btn1">Play now</button>
    </div>
    <div className="wrapper">
      <img className="image" src ={anime} alt="anime"></img>
      {/* <div className="Box"></div> */}
    </div>
    </section>

  <section id="features" className={`${layout.section} valo1`}>
  <img className="image" src ={anime} alt="anime"></img>

    <div className="text1 text-white"><h1 className="FortHead">BGMI</h1>
      <p className="paragraph">   
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim
        commodo consequat.
      </p>
      <button className="btn1">Play now</button>
      </div>
  </section>
  </div>
);

export default Billing;
