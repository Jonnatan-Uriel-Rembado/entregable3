import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative border-2 border-[#8EFF8B]">
        <img src={resident?.image} alt="" />
        {/* Status */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-5 py-2 rounded-md flex items-center gap-2 border-2 border-[#8EFF8B]">
          <div
            className={`h-3 w-3 ${
             characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border-2 border-[#8EFF8B] grid grid-cols-2 items-center justify-between text-center">
        <h4 className="col-span-2">{resident?.name}</h4>
        <ul className="col-span-2">
          <li>
            <span className="text-[#938686]">Species</span> {resident?.species}{" "}
          </li>
          <li>
            <span className="text-[#938686]">Origin</span> {resident?.origin.name}{" "}
          </li>
          <li>
            <span className="text-[#938686]">Times appear</span> {resident?.episode.length}{" "}
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
