import { FaAngleDown, FaAngleLeft, FaBell, FaHandHolding, FaRegCommentAlt } from "react-icons/fa";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import user from "../../assets/user.jpg"
const Header = () => {
    return (
        <div className="w-full flex bg-slate-100 py-4 ">
            <div className="w-1/4 flex items-center justify-center gap-4">
                <h1 className="text-blue-700 text-2xl font-semibold flex gap-2 mx-4 md:mx-0"><FaHandHolding className="text-green-800"></FaHandHolding><span className="hidden md:block">REACHOUTai</span></h1>
                <div className="p-2 bg-white rounded-lg hidden md:block"> 
                    <FaAngleLeft className=" "></FaAngleLeft>
                </div>
            </div>
            <div className="w-1/2 flex md:justify-between items-center md:font-semibold">
                <DynamicTitle title="Job Management"></DynamicTitle>
                <div className="flex md:gap-5 gap-2 md:mx-10">
                    <div className="p-4 bg-white rounded-full text-cyan-700"><FaRegCommentAlt></FaRegCommentAlt></div>
                    <div className="p-4 bg-white rounded-full text-cyan-700"><FaBell></FaBell></div>
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center gap-4">
                <img src={user} className="w-12 h-12 rounded-full" alt="" />
                <div className="md:block hidden">
                    <h1 className="text-cyan-800 font-semibold">Malida Lyne</h1>
                    <p>Recruiter</p>
                </div>
                <FaAngleDown className="md:block hidden"></FaAngleDown>
            </div>
        </div>
    );
};

export default Header;