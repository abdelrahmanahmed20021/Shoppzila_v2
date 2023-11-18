import { Aperture, Truck, Wallet, WalletCards } from "lucide-react";
import { motion } from "framer-motion";
interface IProps {}

const ShopSkill = ({}: IProps) => {
  return (
    <div className=" container mx-auto flex justify-around my-6">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="    flex items-center space-x-2 max-w-[250px]">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="transition-transform ease-in-out"
          >
            <div className="h-16 w-16  hover:animate-  border-2 flex justify-center items-center border-black rounded-full">
              <Truck size={30} className=" cursor-pointer" />
            </div>
          </motion.div>
          <div>
            <h2 className="font-bold">Free Shipping</h2>
            <p className=" text-sm">Free Shipping for orders</p>
          </div>
        </div>
        <div className="    flex items-center space-x-2 max-w-[250px]">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="transition-transform ease-in-out"
          >
            <div className="h-16 w-16  hover:animate-  border-2 flex justify-center items-center border-black rounded-full">
              <Wallet size={30} className=" cursor-pointer" />
            </div>
          </motion.div>
          <div>
            <h2 className="font-bold">Money Guarantee</h2>
            <p className=" text-sm">Within 30 days</p>
          </div>
        </div>
        <div className="    flex items-center space-x-2 max-w-[250px]">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="transition-transform ease-in-out"
          >
            <div className="h-16 w-16  hover:animate-  border-2 flex justify-center items-center border-black rounded-full">
              <Aperture size={30} className=" cursor-pointer" />
            </div>
          </motion.div>
          <div>
            <h2 className="font-bold">Online Support</h2>
            <p className=" text-sm">24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="    flex items-center space-x-2 max-w-[250px]">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="transition-transform ease-in-out"
          >
            <div className="h-16 w-16  hover:animate-  border-2 flex justify-center items-center border-black rounded-full">
              <WalletCards size={30} className=" cursor-pointer  " />
            </div>
          </motion.div>
          <div>
            <h2 className="font-bold">Flexible Payment</h2>
            <p className=" text-sm">Pay with Multiple Credit Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSkill;
