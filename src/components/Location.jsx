import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className="px-2 gap-4 grid items-center justify-items-center">
      <div className="flex items-center justify-center">
        <img src="/portal.webp" alt="" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center justify-center border-[2px] border-[#8EFF8B] max-w-fit">
        <input
          placeholder="type a new location"
          name="idLocation"
          className="text-white bg-[#0000004D] text-center"
          type="number"
        />
        <button className="flex gap-2 items-center bg-[#8EFF8B80] p-2">
          Search <IconSearch size={18} />
        </button>
      </form>

      {/* Location info*/}
      <section className="border-[2px] border-[#8EFF8B] text-xl text-center max-w-[1000px]">
        <h3 className="text-[#8EFF8B] p-2"> ¡Welcome to {location?.name}! </h3>

        <ul className="grid grid-cols-3">
          <li>Type: {location?.type} </li>
          <li>Dimension: {location?.dimension} </li>
          <li>Population: {location?.residents.length} </li>
        </ul>
      </section>
    </section>
  );
};
export default Location;
