import { FaAngleDown, FaAngleLeft, FaBell, FaRegCommentAlt } from "react-icons/fa";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import user from "../../assets/user.jpg"
const Header = () => {
    return (
        <div className="flex bg-slate-100 py-4">
            <div className="w-1/4 flex items-center justify-center gap-4">
                <h1 className="text-blue-700 text-2xl font-semibold">REACHOUTai</h1>
                <div className="p-2 bg-white rounded-lg">
                    <FaAngleLeft></FaAngleLeft>
                </div>
            </div>
            <div className="w-1/2 flex justify-between items-center font-semibold">
                <DynamicTitle></DynamicTitle>
                <div className="flex gap-5 mx-10">
                    <div className="p-4 bg-white rounded-full text-cyan-700"><FaRegCommentAlt></FaRegCommentAlt></div>
                    <div className="p-4 bg-white rounded-full text-cyan-700"><FaBell></FaBell></div>
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center gap-4">
                <img src={user} className="w-12 h-12 rounded-full" alt="" />
                <div>
                    <h1 className="text-cyan-800 font-semibold">Malida Lyne</h1>
                    <p>Recruiter</p>
                </div>
                <FaAngleDown></FaAngleDown>
            </div>
        </div>
    );
};

export default Header;