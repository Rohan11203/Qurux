import { ArrowIcon } from "../Icons/ArrowIcon";
import { Button } from "./Button";

export const Procedures = () => {
  return (
    <div className="px-6 py-10 bg-white">
    <div className="flex flex-col lg:flex-row justify-between items-center">
      
      <div className="w-full lg:w-[40%] p-10 flex flex-col gap-2 text-center lg:text-left">
        <h2 className="text-4xl font-grechen text-[#f8b1b0]">Procedures</h2>
        <h1 className="text-4xl font-lora">Most Popular Procedures</h1>
        <p className="font-light pt-4">
          Mauris cursus posuere sem non fermentum donec condime ntum, nibh ut viverra molestie, urna dui convallis tortor.
        </p>
  
        <div className="flex flex-col sm:flex-row justify-center lg:justify-between pt-6 text-lg font-light">
          <div className="grid gap-3">
            {["Breast Augmentation", "Breast Lift", "Liposuction", "Mommy Makeover", "Tummy Tuck"].map((procedure) => (
              <div key={procedure} className="flex items-center">
                <div className="border border-[#f8b1b0] rounded-full text-[#f8b1b0] p-2">
                  <ArrowIcon />
                </div>
                <h1 className="ml-3">{procedure}</h1>
              </div>
            ))}
          </div>
          <div className="grid gap-3 mt-4 sm:mt-0">
            {["Eyelid surgery", "Facelift", "Neck Lift", "Rhinoplasty", "BOTOX Cosmetic"].map((procedure) => (
              <div key={procedure} className="flex items-center">
                <div className="border border-[#f8b1b0] rounded-full text-[#f8b1b0] p-2">
                  <ArrowIcon />
                </div>
                <h1 className="ml-3">{procedure}</h1>
              </div>
            ))}
          </div>
        </div>
  
        <Button varient="primary" size="md" title="Know more" className="mt-6 mx-auto lg:mx-0" />
      </div>
  
      <div className="flex flex-col sm:flex-row gap-6 pt-10 lg:pt-0">
        <div className="sm:pt-10">
          <img
            className="w-full  h-auto rounded-lg"
            src="https://kinforce.net/qurux/wp-content/uploads/2021/05/cosmetician-with-marker-puts-dotted-lines-on-body-46BU9A4.jpg"
          />
        </div>
        <div>
          <img
            className="w-full  h-auto rounded-lg"
            src="https://kinforce.net/qurux/wp-content/uploads/2021/05/undergoing-skin-resurfacing-procedure-MUN2XTD.jpg"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};
