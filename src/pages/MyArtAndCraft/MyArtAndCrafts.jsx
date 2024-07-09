import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SingleMyCraft from "./SingleMyCraft";

const MyArtAndCrafts = () => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(AuthContext) || {};
  const [control, setControl] = useState(false);
  console.log(user?.email);

  useEffect(() => {
    fetch(` http://localhost:5000/crafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, [user, control]);

  return (
    <div className="overflow-x-auto p-4 mt-20 ">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">serial</th>
            <th className="py-3 px-6 text-left">photo</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">price</th>
            <th className="py-3 px-6 text-left">stockStatus</th>
            <th className="py-3 px-6 text-left">Update</th>
            <th className="py-3 px-6 text-left">Delete</th>
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm font-light">
          {
            cards.map((card,index) =><SingleMyCraft 
            key={card._id}
            control={control}
            setControl={setControl}
            card={card}
            index={index }
            
            ></SingleMyCraft> )
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyArtAndCrafts;
