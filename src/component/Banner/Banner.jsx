import banner from "../../assets/bg-stage.png";
import ele from "../../assets/ele.png";
import other from "../../assets/other-min.png";
import snaks from "../../assets/snaks-min.png";
import tour from "../../assets/tour-min.png";
import "./style.scss";
export default function Banner() {
  return (
    <div className="bannerMain">
      <div className="bannerBg">
        <img src={banner} alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,32L60,64C120,96,240,160,360,165.3C480,171,600,117,720,117.3C840,117,960,171,1080,176C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <img className="tour" src={tour} alt="" />
        <img className="snaks" src={snaks} alt="" />
        <img className="ele" src={ele} alt="" />
        <img className="other" src={other} alt="" />
      </div>
      <div className="bannerTxt">
        <h2>Shopping and Department Store</h2>
        <p>
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
