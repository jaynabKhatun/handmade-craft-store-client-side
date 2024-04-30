import Footer from "../shared/footer/Footer";
import Navber from "../shared/navber/Navber";
import Slider2 from "../Home/Slider2/Slider2";
import CraftItemSection from "./craftItemSection/CraftItemSection";
import UpCommingEvent from "./upCommingEvent/UpCommingEvent";
import AskQuestion from "./askQuestion/AskQuestion";
import MarqueSlider from "./marqueSlider/MarqueSlider";



const Home = () => {

    return (
        <div>


            <Navber></Navber>
            <Slider2></Slider2>
            <UpCommingEvent></UpCommingEvent>
            <AskQuestion></AskQuestion>
            <MarqueSlider></MarqueSlider>
            <Footer></Footer>


        </div>
    );
};

export default Home;