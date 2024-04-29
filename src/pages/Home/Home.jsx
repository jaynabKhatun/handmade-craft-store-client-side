import Footer from "../shared/footer/Footer";
import Navber from "../shared/navber/Navber";
import Slider2 from "../Home/Slider2/Slider2";
import CraftItemSection from "./craftItemSection/CraftItemSection";



const Home = () => {

    return (
        <div>
          

            <Navber></Navber>
            <Slider2></Slider2>
            <CraftItemSection></CraftItemSection>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;