import React from "react";
import AddressCard from "./AddressCard";

const Address = ({ addressList }) => {
  return (
    <div className="bg-white p-10">
      <div className="mb-8">
        <h5 className="text-lg font-semibold">
          {addressList && Object.keys(addressList).length
            ? "Choose a delivery address"
            : "Add a delivery address"}
        </h5>
        <p className="text-gray-500">
          {addressList && Object.keys(addressList).length
            ? "Multiple addresses in this location"
            : "You seem to be in the new location"}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {addressList &&
          Object.keys(addressList).length &&
          Object.values(addressList).map((address, index) => {
            return <AddressCard key={index} address={address} />;
          })}
        <AddressCard />
      </div>
    </div>
  );
};

export default Address;
