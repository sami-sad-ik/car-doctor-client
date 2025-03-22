import { useLoaderData } from "react-router-dom";
import CheckoutBanner from "../../Shared/CheckoutBanner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const { _id, title, price } = services;
  const { user } = useContext(AuthContext);
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const order = {
      username: name,
      email,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <CheckoutBanner />
      <div className="my-12 card rounded-md bg-base-200 w-full p-12 shrink-0  ">
        <form onSubmit={handleCheckout} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                placeholder="Due"
                defaultValue={price}
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="input"
                required
              />
            </div>
          </div>

          <div className="form-control mt-3">
            <input
              className="py-2 rounded-md btn-block border-none text-white text-lg hover:bg-[#cb492f] bg-[#FF3811]
                focus:scale-[99%] duration-200"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
