import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ShowAllCraft from "./ShowAllCraft";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllArtAndCraft = () => {
  const axiosCommon = useAxiosCommon();

  const {
    data: crafts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["crafts"],
    queryFn: async () => {
      const response = await axiosCommon.get("/crafts");
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading crafts</div>;
  }

  return (
    <div>
      <SectionTitle
        subHeading="Our All Items"
        heading="Painting"
      ></SectionTitle>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-28">
        {crafts.map((craft) => (
          <ShowAllCraft key={craft._id} craft={craft} />
        ))}
      </div>
    </div>
  );
};

export default AllArtAndCraft;
