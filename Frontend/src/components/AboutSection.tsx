import { Button } from "./Button";

export const AboutSection = () => {
  return (
    <div className="bg-white sm:pt-20 pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative md:w-1/2 w-full flex justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-set-of-natural-and-floral-elements-G9XCU6B_about.png"
                className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48"
                alt="Decorative Element"
              />
            </div>
            <img
              src="https://kinforce.net/qurux/wp-content/uploads/2021/05/woman-spa-mask-half-face-beauty-concept-healthy-po-XSNKXZR.png"
              className="max-w-full h-auto"
              alt="Woman Spa"
            />
          </div>

          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <div className="text-5xl font-grechen text-[#f8b1b0]">About Us</div>
            <h1 className="text-3xl sm:text-4xl pt-2 font-lora">
              Welcome to Our Qurux Clinic
            </h1>
            <p className="text-lg pt-6 font-light">
              Mauris cursus posuere sem non fermentum donec condimentum, nibh ut
              viverra molestie, urna dui convallis tortor, sed dignissim arcu ex
              sed mauris quisque at libero ac.
            </p>
            <p className="text-lg pt-4 font-light">
              Phasellus placerat feugiat ante, eget efficitur eros dapibus fusce
              a urna non dolor pellentesque consequat vitae felis.
            </p>
            <div className="flex justify-center">
              <Button
                varient="primary"
                className="mt-8 px-6 py-3"
                title="Know More"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
