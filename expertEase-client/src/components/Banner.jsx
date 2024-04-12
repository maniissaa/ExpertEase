import banner from "../../public/banner.jpeg";

function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 gap-2 my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2  md:mt-20 mt-10">
          <div className="space-y-9">
            <div>
              <h1 className="text-4xl font-semibold font-serif">Hello,</h1>
              <h1 className="text-4xl font-bold font-serif">
                Unlock Your Potential , Where Learning Flows{" "}
                <span className="text-indigo-700">Effortlessly</span>
              </h1>
            </div>

            <p className="text-xl font-serif">
              At ExpertEase, we believe in unlocking every individual's full
              potential through seamless and effortless learning experiences.
              Our platform is designed to empower learners of all backgrounds
              and abilities to explore, discover, and grow at their own pace.
            </p>

            <label className="border flex items-center gap-2 rounded-lg px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="Email"
              />
            </label>
          </div>

          <button className="btn btn-neutral px-3 py-2 font-serif mt-3">
            Get Started
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img
            className="md:mt-24 mt-4  md:h-[490px]  md:w-[570px] "
            src={banner}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
