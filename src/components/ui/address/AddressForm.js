import React, { useRef, useState } from "react";
import OfficeIcon from "../../../utils/icons/OfficeIcon";
import HomeIcon from "../../../utils/icons/HomeIcon";
import LocationIcon from "../../../utils/icons/LocationIcon";
import Input from "../../Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  closeAddressForm,
} from "../../../state/address/addressSlice";

const AddressForm = () => {
  const dispatch = useDispatch();
  const [addressType, setAddressType] = useState(null);
  const doorRef = useRef(null);
  const areaRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const pincodeRef = useRef(null);

  const count = useSelector((state) => state.address.count);

  const handleSaveAddress = () => {
    const address = {
      id: count + 1,
      type: addressType,
      door: doorRef.current.value,
      area: areaRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      pincode: pincodeRef.current.value,
    };
    dispatch(addAddress(address));
    dispatch(closeAddressForm());
  };

  return (
    <div>
      <Input
        ref={doorRef}
        placeholder="Door / Flat No."
        required={true}
        pattern="[a-zA-Z0-9\s]+"
      />
      <Input
        ref={areaRef}
        placeholder="Area"
        required={true}
        pattern="[a-zA-Z0-9\s]+"
      />
      <Input
        ref={cityRef}
        placeholder="City"
        required={true}
        pattern="[a-zA-Z\s]+"
      />
      <Input
        ref={stateRef}
        placeholder="State"
        required={true}
        pattern="[a-zA-Z\s]+"
      />
      <Input
        ref={pincodeRef}
        placeholder="Pincode"
        required={true}
        pattern="[0-9]+"
      />
      <div className="flex mb-8">
        <button
          className={
            "flex-1 p-5 border border-gray-300 flex items-center gap-2 hover:bg-stone-100 " +
            (addressType &&
              addressType.toLowerCase() === "home" &&
              "bg-stone-100")
          }
          onClick={() => setAddressType("Home")}
        >
          <HomeIcon />
          Home
        </button>
        <button
          className={
            "flex-1 p-5 border border-gray-300 flex items-center gap-2 hover:bg-stone-100 " +
            (addressType &&
              addressType.toLowerCase() === "work" &&
              "bg-stone-100")
          }
          onClick={() => setAddressType("Work")}
        >
          <OfficeIcon />
          Work
        </button>
        <button
          className={
            "flex-1 p-5 border border-gray-300 flex items-center gap-2 hover:bg-stone-100 " +
            (addressType &&
              addressType.toLowerCase() === "other" &&
              "bg-stone-100")
          }
          onClick={() => setAddressType("Other")}
        >
          <LocationIcon />
          Other
        </button>
      </div>
      <button
        className="bg-orange-400 text-white w-full py-4"
        onClick={handleSaveAddress}
      >
        SAVE ADDRESS & PROCEED
      </button>
    </div>
  );
};

export default AddressForm;
