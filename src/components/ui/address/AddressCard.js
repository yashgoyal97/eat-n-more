import React, { useEffect, useState } from "react";
import LocationIcon from "../../../utils/icons/LocationIcon";
import HomeIcon from "../../../utils/icons/HomeIcon";
import OfficeIcon from "../../../utils/icons/OfficeIcon";
import { useDispatch } from "react-redux";
import { showAddressForm } from "../../../state/address/addressSlice";
// import { addAddress } from "../../../state/address/addressSlice";

const AddressCard = ({ address }) => {
  const dispatch = useDispatch();
  const [currentAddress, setCurrentAddress] = useState({
    type: "Add New Address",
    door: "Door",
    area: "Area",
    city: "City",
    state: "State",
    pincode: "Pincode",
  });

  useEffect(() => {
    setCurrentAddress(address ? address : currentAddress);
  }, [address, currentAddress]);

  const openAddressForm = () => {
    dispatch(showAddressForm());
    // dispatch(
    //   addAddress({
    //     id: 3,
    //     type: "Home",
    //     door: "D2-023",
    //     area: "DLF Newtown",
    //     city: "Bengaluru",
    //     state: "KA",
    //     pincode: "560068",
    //   })
    // );
  };

  const Icon = ({ type }) => {
    switch (type.toLowerCase()) {
      case "home":
        return <HomeIcon />;
      case "work":
        return <OfficeIcon />;
      default:
        return <LocationIcon />;
    }
  };

  return (
    <div
      className={
        "w-full border-[1px] px-12 py-5 hover:shadow-md relative cursor-pointer " +
        (address ? "" : "border-dashed")
      }
    >
      <div className="absolute left-3">
        <Icon type={currentAddress.type} />
      </div>
      <div className="mb-10">
        <h5 className="text-base font-medium mb-2">{currentAddress.type}</h5>
        <p className="text-xs text-gray-500">{`${currentAddress.door}, ${currentAddress.area}`}</p>
        <p className="text-xs text-gray-500">{`${currentAddress.city}, ${currentAddress.state}`}</p>
        <p className="text-xs text-gray-500">{`${currentAddress.pincode}, India`}</p>
      </div>
      {address ? (
        <button className="bg-green-600 text-white text-xs font-bold p-2 w-32">
          DELIVER HERE
        </button>
      ) : (
        <button
          className="border border-green-500 text-green-600 text-xs font-bold p-2 w-32"
          onClick={openAddressForm}
        >
          ADD NEW
        </button>
      )}
    </div>
  );
};

export default AddressCard;
