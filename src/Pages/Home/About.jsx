import personImg from "../../../src/assets/images/about_us/person.jpg";
import partsImg from "../../../src/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={personImg}
              className="w-3/4 object-cover rounded-lg shadow-2xl"
            />
            <img
              src={partsImg}
              className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-36">
            <h1 className="my-3 text-xl font-bold text-[#FF3811]">About Us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
