import { FaRegSun } from "react-icons/fa";

const Submenu = () => {
    return (
        <div className="p-4 w-full flex md:flex-row gap-10 md:gap-0 flex-col md:text-lg ">
            <div className="flex md:w-1/2 w-full justify-around">
                <div>
                    <h1>Job Title</h1>
                    <div className="flex items-end gap-2">
                        <select name="" id="" className="bg-transparent font-semibold">
                            <option value="Frontend Developer">Frontend Developer</option>
                        </select>
                        <FaRegSun></FaRegSun>
                    </div>
                </div>
                <div>
                    <h1>Hiring Manager</h1>
                    <p className="font-semibold">Nail Patel</p>
                </div>
                <div>
                    <h1>Department</h1>
                    <p className="font-semibold">Techn</p>
                </div>
            </div>
            <div className="flex md:w-1/2 w-full justify-around">
                <div>
                    <h1>Team</h1>
                    <p className="font-semibold">Team-A</p>
                </div>
                <div>
                    <h1>Client</h1>
                    <p className="font-semibold">Jhon Doe</p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p className="font-semibold text-green-600">Open</p>
                </div>
                <div>
                    <h1>Priority</h1>
                    <p className="font-semibold text-red-600">High</p>
                </div>
            </div>
        </div>
    );
};

export default Submenu;