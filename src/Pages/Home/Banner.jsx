import img1 from "../../../src/assets/images/banner/1.jpg";
import img2 from "../../../src/assets/images/banner/2.jpg";
import img3 from "../../../src/assets/images/banner/3.jpg";
import img4 from "../../../src/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[580px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          <div className="absolute h-full flex items-center gap-2 left-0 top-0 bg-gradient-to-r from-[#151515] ">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover " />
          <div className="absolute h-full flex items-center gap-2 left-0 top-0 bg-gradient-to-r from-[#151515] ">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover " />
          <div className="absolute h-full flex items-center gap-2 left-0 top-0 bg-gradient-to-r from-[#151515] ">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover " />
          <div className="absolute h-full flex items-center gap-2 left-0 top-0 bg-gradient-to-r from-[#151515] ">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
