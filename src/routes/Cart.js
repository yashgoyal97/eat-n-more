import React from "react";
import { useSelector } from "react-redux";
import Address from "../components/ui/address/Address";
import Sidebar from "../components/Sidebar";
import AddressForm from "../components/ui/address/AddressForm";

const Cart = () => {
  const isAddressFormOpen = useSelector(
    (state) => state.address.isAddressFormOpen
  );
  const addressList = useSelector((state) => state.address.addressList);

  return (
    <div className="w-100vw h-full bg-gray-200 py-8">
      <Sidebar
        openSidebar={isAddressFormOpen}
        heading="Save delivery address"
        children={<AddressForm />}
      />
      <div className="w-[80%] m-auto h-100vh">
        <div className="flex gap-8">
          <div className="flex-[4] flex-col gap-5">
            <Address addressList={addressList} />
            <div className="bg-white p-8 border border-red-500">Payments</div>
          </div>
          <div className="flex-[2] bg-white p-5 h-fit border border-red-500">Items</div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
