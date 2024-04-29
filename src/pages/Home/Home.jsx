import Footer from "../shared/footer/Footer";
import Navber from "../shared/navber/Navber";
import Slider2 from "../Home/Slider2/Slider2";
import CraftItemSection from "./craftItemSection/CraftItemSection";
import UpCommingEvent from "./upCommingEvent/UpCommingEvent";
import AskQuestion from "./askQuestion/AskQuestion";



const Home = () => {

    return (
        <div>


            <Navber></Navber>
            <Slider2></Slider2>
            <CraftItemSection></CraftItemSection>
            <UpCommingEvent></UpCommingEvent>
            <AskQuestion></AskQuestion>
            <Footer></Footer>


        </div>
    );
};

export default Home;