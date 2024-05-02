import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SingleMyCraft from "./SingleMyCraft";


const MyArtAndCrafts = () => {
    const [cards, setCards] = useState([])
    const { user } = useContext(AuthContext) || {};
    const [control, setControl] = useState(false)
    console.log(user?.email)
   
   





    useEffect(() => {
        fetch(` art-and-craft-store-hazel.vercel.app/crafts/${user?.email}`,)
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, [user,control])







    return (
        <div className="mt-28 grid md:grid-cols-3 gap-2 ">
            {
                cards.map((card => <SingleMyCraft
                     key={card._id}
                      card={card}
                      control={control}
                      setControl={setControl}
                      ></SingleMyCraft>))
            }

        </div>
    );
};

export default MyArtAndCrafts;