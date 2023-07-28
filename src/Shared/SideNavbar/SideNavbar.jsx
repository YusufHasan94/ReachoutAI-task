import { FaRegComments, FaRegFileAlt, FaRegFolder, FaRegHandshake, FaThLarge, FaUserCheck, FaUsers } from "react-icons/fa";

const SideNavbar = () => {
    return (
        <div className=" bg-slate-100 p-4">   
            <div className="flex flex-col items-center">
                <h1 className="w-full text-center my-2 bg-green-600 text-white p-4 text-xl rounded-full">Create New Job +</h1>
                <ul className="">
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaRegFolder className="text-green-700"></FaRegFolder> My Jobs</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaThLarge className="text-green-700"></FaThLarge> Dashboard</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaUserCheck className="text-green-700"></FaUserCheck> Candidate Reachout</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaUsers className="text-green-700"></FaUsers> Search Assistant</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaRegComments className="text-green-700"></FaRegComments> Interview</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaRegHandshake className="text-green-700"></FaRegHandshake> Intake</li>
                    <li className="flex items-center gap-4 text-xl my-2 hover:bg-slate-50 p-4 rounded-full"><FaRegFileAlt className="text-green-700"></FaRegFileAlt> Job description</li>
                </ul>
            </div>
            <div className="text-center my-10 bg-blue-900 p-4 text-white rounded-xl mb-2">
                <h1 className="text-2xl ">Upgrade your account</h1>
                <p className="text-lg">Increase your usage and get early access to new features</p>
                <button className="w-full bg-green-600 rounded-full py-2 my-2 text-xl">Upgrade</button>
            </div>
        </div>
    );
};

export default SideNavbar;