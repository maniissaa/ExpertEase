import Card from "./Card";
import list from "../../public/list.json";

import { useNavigate } from "react-router-dom";

function Business() {
  const navigate = useNavigate();

  let backButton = () => {
    navigate("/");
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-3 md:mt-20 mt-4">
        <div className="space-y-3">
          <h1 className="font-serif text-3xl font-semibold">
            Welcome to <span className="text-indigo-700">ExpertEase</span>
            <span className="text-lime-500">Premium Courses</span>.
          </h1>
          <div className="bg-black md:h-24 h-40 flex items-center pl-3">
            <h1 className="font-serif text-lg font-medium text-white">
              Gain invaluable knowledge from our expert trainers and advance
              your skills with our{" "}
              <span className="text-lime-500">premium</span> courses.
            </h1>
          </div>
          <div className="flex justify-start md:justify-end">
            <button
              onClick={backButton}
              className="text-lg bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 font-serif flex items-center"
            >
              Back
            </button>
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text--900 text-3xl h-8 font-medium font-serif">
            what to
            <span className=" hover:text-indigo-700 py-0 w-12 m-1">
              {" "}
              learn{" "}
            </span>{" "}
            <span className=" hover:text-lime-500">next </span>
            <span className=" hover:text-red-500">?</span>
          </h1>
          <h1 className="mt-1">Our top pick for you</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Business;
