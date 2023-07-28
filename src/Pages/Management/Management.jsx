
const Management = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 p-4">
                    <h1>Job Title</h1>
                    <input type="text" name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2" defaultValue="Frontend Developer"/>
                    <h1>Hiring Manager</h1>
                    <input type="text" name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2" defaultValue="Nail Patel"/>
                    <h1>Department</h1>
                    <input type="text" name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2" defaultValue="Tech"/>
                    <h1>Team</h1>
                    <input type="text" name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2" defaultValue="Team-A"/>
                    <h1>Client</h1>
                    <input type="text" name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2" defaultValue="John Doe"/>
                    <h1>Priority</h1>
                    <select name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2">
                        <option value="" >High</option>
                    </select>
                    <h1>Status</h1>
                    <select name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2">
                        <option value="">Open</option>
                    </select>
                    <h1>Stage</h1>
                    <select name="" id="" className="w-full border-2 border-gray-800 rounded-full p-1 my-2">
                        <option value="">Initial</option>
                    </select>
                </div>
                <div className="md:w-1/2 p-4">
                    <h1>Upload your Job Description</h1>
                    <div className="w-full border-2 border-dotted border-green-500 h-44 rounded-xl flex justify-center items-center my-2">
                        <input type="file" name="" id=""  />
                    </div>
                    <h1>Job Description</h1>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Copy/paste your job description" className="w-full border-2 h-96 rounded-xl flex justify-center items-center my-2 p-2"></textarea>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <button className="w-20 p-2 rounded-2xl mx-4 text-green-500 border-green-500 border-2">Cancel</button>
                <button className="w-20 p-2 rounded-2xl mx-4 text-white border-green-500 bg-green-500 border-2">Save</button>
            </div>
        </div>
    );
};

export default Management;