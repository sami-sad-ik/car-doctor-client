import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="rounded-md p-5 border-2 bg-base-100 md:w-full w-[370px]">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="w-[350px] h-[223px] mx-auto rounded-md"
        />
      </figure>
      <div className="w-[350px] mx-auto my-3 items-center text-left">
        <h2 className="my-4 card-title text-3xl font-bold">{title}</h2>
        <div className="card-actions justify-between items-center text-2xl font-semibold text-[#FF3811]">
          <p>Price : ${price}</p>
          <Link
            to={`/checkout/${_id}`}
            className="hover:bg-slate-200 p-2 rounded-md">
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
