import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const UpdateCraft = () => {
  const card = useLoaderData();

  const {
    _id,
    photo,
    item,
    subcategory,
    price,
    processing,
    description,
    rating,
    customization,
    stockStatus,
    email,
    name,
  } = card;

  const navigate = useNavigate();

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const item = form.item_name.value;
    const subcategory = form.subcategory_Name.value;
    const price = form.price.value;
    const description = form.short_description.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const name = form.name.value;

    const updateCraft = {
      photo,
      item,
      subcategory,
      price,
      processing,
      description,
      rating,
      customization,
      stockStatus,
      email,
      name,
    };

    // console.log(updateCraft);

    //update craft
    fetch(`https://handmade-craft-store-server-side.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            navigate('/myArtAndCraft')
          Swal.fire({
            title: "Updated!",
            text: "Your Craft has been updated.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="mt-28 ">
      <span className="font-bold text-4xl font-serif">
        <Typewriter
          words={["Update Your Craft Here..."]}
          loop={""}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>

      <section className="p-2 flex  text-gray-900">
        <form
          onSubmit={handleUpdateCraft}
          className="container flex flex-col  bg-base-300   mx-auto "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  photo url
                </label>

                <input
                  name="photo"
                  defaultValue={photo}
                  id=" photo"
                  type="text"
                  placeholder="photo url"
                  className="w-full rounded-md border-b-2  border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor=" item_name" className="text-sm">
                  {" "}
                  item_name
                </label>
                <input
                  id="item_name"
                  defaultValue={item}
                  name="item_name"
                  type="text"
                  placeholder=" item_name"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="subcategory_Name" className="text-sm">
                  subcategory_Name
                </label>
                <input
                  id="subcategory_Name"
                  defaultValue={subcategory}
                  name="subcategory_Name"
                  type="text"
                  placeholder="subcategory_Name"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  price
                </label>
                <input
                  id="price"
                  defaultValue={price}
                  name="price"
                  type="text"
                  placeholder="price"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="short description" className="text-sm">
                  short description
                </label>
                <input
                  name="short_description"
                  defaultValue={description}
                  id="short description"
                  type="text"
                  placeholder="short description"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-sm">
                  rating
                </label>
                <input
                  id="rating"
                  name="rating"
                  type="text"
                  placeholder="rating"
                  defaultValue={rating}
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="customization" className="text-sm">
                  customization
                </label>

                <input
                  name="customization"
                  defaultValue={customization}
                  placeholder="customization"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                  type="text"
                  list="cars"
                />
                <datalist id="cars">
                  <option>Yes</option>
                  <option>No</option>
                </datalist>
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="processing_time" className="text-sm">
                  processing_time
                </label>
                <input
                  name="processing_time"
                  id="processing_time"
                  type="text"
                  defaultValue={processing}
                  placeholder="processing_time"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="stockStatus" className="text-sm">
                  stock Status
                </label>
                <input
                  name="stockStatus"
                  defaultValue={stockStatus}
                  placeholder="In stock"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                  type="text"
                  list="order"
                />
                <datalist id="order">
                  <option>In stock</option>
                  <option>Made to Order</option>
                </datalist>
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  {" "}
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email"
                  defaultValue={email}
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Name" className="text-sm">
                  User Name
                </label>
                <input
                  name="name"
                  id=" Name"
                  defaultValue={name}
                  type="text"
                  placeholder="name"
                  className="w-full rounded-md border-b-2 border-black shadow-2xl p-2"
                />
              </div>

              <div className="col-span-full ">
                <input
                  value="Update"
                  type="submit"
                  placeholder=""
                  className="w-full btn border-b-2 border-t-2 border-black font-bold  shadow-2xl p-2 "
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateCraft;
