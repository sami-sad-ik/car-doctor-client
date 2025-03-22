import checkout from "../assets/images/checkout/checkout.png";

const CheckoutBanner = () => {
  return (
    <div className="w-full relative">
      <img className="w-full h-80" src={checkout} alt="" />
      <div className="absolute flex justify-start items-center pl-32 bg-gradient-to-r from-[#151515] top-0 left-0 w-full h-full rounded-lg">
        <h1 className="text-5xl font-bold text-white">Check Out</h1>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center bg-[#FF3811] py-2 px-10 ">
          <h2 className="text-white text-2xl">Home/Checkout</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBanner;
