import { Button } from "./Button";

export const AboutSection = () => {
  return (
    <div className=" bg-white sm:pt-20 pt-10">
      <div className="max-w-6xl mx-auto ">
        <div className="flex">
          <div className="relative">
            <div className="absolute top-[52%] left-[80%]">
              <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-set-of-natural-and-floral-elements-G9XCU6B_about.png" />
            </div>
            <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/woman-spa-mask-half-face-beauty-concept-healthy-po-XSNKXZR.png" />
          </div>
          <div className="max-w-xl mx-auto m-10  p-6">
            <div className="text-5xl font-grechen text-[#f8b1b0]">About Us</div>
            <h1 className="text-4xl pt-2 font-lora">
              Welcome to out Qurux Clinic
            </h1>
            <p className="text-lg pt-8 font-light">
              Mauris cursus posuere sem non fermentum donec condime ntum, nibh
              ut viverra molestie, urna dui convallis tortor, sed dignissim arcu
              ex sed mauris quisque at libero ac.
            </p>
            <p className="text-lg pt-6 font-light">
              Phasellus placerat feugiat ante, eget efficitur eros dapibus fusce
              a urna non dolor pellentesque consequat vitae felis.
            </p>
            <Button
              varient="primary"
              className="mt-10"
              title="Know more"
              size="md"
            />

            {/* <div className="bg-[#f8b1b0] text-lg w-36  py-2 text-center rounded-3xl mt-10 text-white font-lora cursor-pointer">
                  Know More
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
