import React from "react";
import farmHero from "../../assets/images/farmHero.png";
import { Button, TextInput } from "flowbite-react";
import TrackingFAQ from "./TrackingFAQ";

const Hero = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10">
        <div className="px-4 pt-6 md:px-0 md:pt-[20%]">
          <h2 className="text-3xl font-display md:text-5xl">
            Modern <span className="text-[#357960]">Farm Management</span>
          </h2>
          <h2 className="text-3xl font-display md:text-5xl">
            & <span className="text-[#357960]">Traceability </span> Solution
          </h2>
          <p className="font-display py-6 text-xl">
            FarmTrace is a modern cloud-based universal farming application that
            provides comprehensive functions and features to manage and track
            your farm activities.
          </p>
          <div className="md:mt-8">
            <h3 className="font-display text-2xl text-[#357960] font-bold md:text-3xl">
              Trace your product
            </h3>
            <p className="font-display text-xl">
              Trace your product by entering the batch number to find out the
              current status
            </p>
            <div className="flex gap-3 mt-8">
              <div className="w-2/3">
                <TextInput
                  placeholder="Enter the batch number of product"
                  borderRadius="40px"
                />
              </div>
              <Button className="w-1/3 bg-[#357960]">Trace</Button>
            </div>
            <TrackingFAQ />
          </div>
        </div>
        <div>
          <img
            src={farmHero}
            alt="hero image"
            style={{ maxWidth: "100%", height: "auto", marginBottom: "2rem" }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
