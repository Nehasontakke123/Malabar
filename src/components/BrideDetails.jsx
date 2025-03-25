import { useParams } from "react-router-dom";
import BridalQuote from "./BridalQuote";
import FloatingFlowers from "./FloatingFlowers";
import BrideMusicPlayer from "./BrideMusicPlayer"; // 🎶 New Component
import "../assets/css/BrideDetails.css";

// Import Images & Music
import MainImg1 from "../assets/images/Bejeweled.jpg";
import MainImg2 from "../assets/images/Enchanting.jpg";
import MainImg3 from "../assets/images/show-stopper.jpg";
import MainImg4 from "../assets/images/trendsetter.jpg";
import MainImg5 from "../assets/images/Dazzling32.jpg";
import MainImg6 from "../assets/images/6_regal.jpg";
import MainImg7 from "../assets/images/7_Elegant.jpg";
import MainImg8 from "../assets/images/8_Mararashtrian.jpg";
import MainImg9 from "../assets/images/9_Tamil.jpg";
import MainImg10 from "../assets/images/10_odiya.jpg";
import MainImg11 from "../assets/images/11_Punjabi.jpg";
import MainImg12 from "../assets/images/12_gujarati.jpg";
import MainImg13 from "../assets/images/Bengal.jpg";
import MainImg14 from "../assets/images/Bihari.jpg";

import MarathiMusic from "../assets/music/SwargHaNava.mp3.mp3";
import PunjabiMusic from "../assets/music/MaiNaalKhadaHanTere.mp3.mp3";
import TamilMusic from "../assets/music/Mastmaganwhatsapp.mp3";
import BejeweledMusic from "../assets/music/SawaarLoonLootera.mp3";
import ShowstopperMusic from "../assets/music/koibandhani.mp3.mp3";
import EnchantingMusic from "../assets/music/MainRangSharbatonKa.mp3.mp3";
import TrendsetterMusic from "../assets/music/SajnaTerePiyar.mp3";
import DazzlingMusic from "../assets/music/ManwaLage.mp3.mp3";
import RegalMusic from "../assets/music/SaathiyaShreyaGhoshal.mp3.mp3";
import ElegantMusic from "../assets/music/Beautiful Wall Decor!.mp3";
import OdiyaMusic from "../assets/music/Song.mp3.mp3";
import GujaratiMusic from "../assets/music/The.mp3.mp3";
import BengaliMusic from "../assets/music/TujhMeinRabDikhtaHai.mp3.mp3";
import BihariMusic from "../assets/music/ᴀɢᴀʀᴛᴜᴍᴋᴀʜᴏ.mp3.mp3";

const brides = [
  { id: 1, name: "Bejeweled Bride", image: MainImg1, details: "She shines like a jewel, adorned in exquisite gold and diamond jewelry, reflecting elegance and prosperity.", videoUrl: "https://www.youtube.com/embed/YYnSEd5dBMg", music: BejeweledMusic },
  { id: 2, name: "Show-stopper Bride", image: MainImg2, details: "She steals the spotlight with her beauty, confidence, and modern bridal fashion.", videoUrl: "https://www.youtube.com/embed/XCvRgM8fziw", music: ShowstopperMusic },
  { id: 3, name: "Enchanting Bride", image: MainImg3, details: "Her charm is mesmerizing, with intricate embroidery and floral designs symbolizing romance and grace.", videoUrl: "https://www.youtube.com/embed/fENiGoK-vi0", music: EnchantingMusic },
  { id: 4, name: "Trendsetter Bride", image: MainImg4, details: "She sets new fashion trends by blending traditional and contemporary styles, making a bold statement.", videoUrl: "https://www.youtube.com/embed/bp2aThDTL2I", music: TrendsetterMusic },
  { id: 5, name: "Dazzling Bride", image: MainImg5, details: "She dazzles in her elegance, often adorned with Swarovski embellishments and royal lehengas.", videoUrl: "https://www.youtube.com/embed/JdjFI9ASbBg", music: DazzlingMusic },
  { id: 6, name: "Regal Bride", image: MainImg6, details: "She carries herself like a queen, wearing royal silk sarees and heirloom jewelry.", videoUrl: "https://www.youtube.com/embed/R35thns4IAw", music: RegalMusic },
  { id: 7, name: "Elegant Bride", image: MainImg7, details: "Grace and elegance define her, as she opts for classic designs with timeless appeal.", videoUrl: "https://www.youtube.com/embed/p-gdhnGmhZU", music: ElegantMusic },
  { id: 8, name: "Marathi Bride", image: MainImg8, details: "She wears a traditional Nauvari saree, a Nath (nose ring), and green bangles, symbolizing prosperity and marital bliss.", videoUrl: "https://www.youtube.com/embed/e14qfHSiXik", music: MarathiMusic },
  { id: 9, name: "Tamil Bride", image: MainImg9, details: "Draped in a Kanjeevaram saree with temple jewelry, she embodies Tamil heritage and cultural richness.", videoUrl: "https://www.youtube.com/embed/_Fncl20Ewzg", music: TamilMusic },
  { id: 10, name: "Odiya Bride", image: MainImg10, details: "She wears a red and white saree with intricate designs, symbolizing purity and prosperity.", videoUrl: "https://www.youtube.com/embed/abbu6qxvpMM", music: OdiyaMusic },
  { id: 11, name: "Punjabi Bride", image: MainImg11, details: "She wears a vibrant red lehenga with Chooda (red bangles) and Kalire, signifying blessings and joy.", videoUrl: "https://www.youtube.com/embed/cyz34LLeo6Q", music: PunjabiMusic },
  { id: 12, name: "Gujarati Bride", image: MainImg12, details: "Draped in a Panetar or Gharchola saree, she reflects the colorful essence of Gujarat's traditions.", videoUrl: "https://www.youtube.com/embed/VYr_YcKHfs0", music: GujaratiMusic },
  { id: 13, name: "Bengali Bride", image: MainImg13, details: "She wears a red Banarasi saree, with Alta on her hands and a Mukut (crown) on her head.", videoUrl: "https://www.youtube.com/embed/qjcP50kHPZs", music: BengaliMusic },
  { id: 14, name: "Bihari Bride", image: MainImg14, details: "Simple yet stunning, she wears a red saree with Shankha and Pola bangles, symbolizing marital bliss.", videoUrl: "https://www.youtube.com/embed/GIiEv703Dgs", music: BihariMusic },
];

const BrideDetails = () => {
  const { id } = useParams();
  const bride = brides.find((b) => b.id === parseInt(id));

  if (!bride) return <h2 className="not-found">Bride Not Found!</h2>;


  

  return (
    <div className="bride-content">
      {bride.music && <BrideMusicPlayer music={bride.music} />}
      <img src={bride.image} alt={bride.name} className="bride-image" />
      <div className="bride-text">
        <h2>Bride Name: {bride?.name || "Not Available"}</h2>
        <p>Details: {bride?.details || "No details provided"}</p>
      </div>
      
      {/* YouTube Video Embed */}
      <div className="bride-video">
        <iframe
          width="560"
          height="315"
          src={bride.videoUrl}
          title={bride.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <FloatingFlowers />
      <BridalQuote />
    </div>
  );
};


export default BrideDetails;



