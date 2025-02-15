import { ArrowIcon } from "../Icons/ArrowIcon";
import { Button } from "./Button";

export const Procedures = () => {
  return (
    <div className="pl-20 pt-20 bg-white pb-20">
      <div className="flex justify-between">
        <div className=" w-[40%] p-10 flex flex-col gap-2">
          <div>
            <h2 className="text-4xl font-grechen text-[#f8b1b0]">Procedures</h2>
          </div>
          <div>
            <h1 className="text-4xl font-lora">Most Popular Procedures</h1>
          </div>
          <div>
            <p className="font-light pt-6">
              Mauris cursus posuere sem non fermentum donec condime ntum, nibh
              ut viverra molestie, urna dui convallis tortor.
            </p>
          </div>
          <div className="flex justify-between pt-10 text-xl font-light">
            <div className="grid gap-2">
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Breast Augmentation</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Breast Lift</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Liposuction</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Mommy Makeover</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Tummy Tuck</h1>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Eyelid surgery</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Facelift</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Neck Lift</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>Rhinoplasty</h1>
              </div>
              <div className="flex items-center">
                <div className="border mr-4 border-[#f8b1b0] rounded-full text-[#f8b1b0]">
                  <ArrowIcon />
                </div>
                <h1>BOTOX Cosmetic</h1>
              </div>
            </div>
          </div>
          <Button
            varient="primary"
            size="md"
            title="Know more"
            className="mt-6"
          />
        </div>
        <div className="flex gap-10">
          <div className="pt-20">
            <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/cosmetician-with-marker-puts-dotted-lines-on-body-46BU9A4.jpg" />
          </div>
          <div>
            <img src="https://kinforce.net/qurux/wp-content/uploads/2021/05/undergoing-skin-resurfacing-procedure-MUN2XTD.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
