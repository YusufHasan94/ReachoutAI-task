import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Management from '../Management/Management';

const CategoryTabs = () => {
    return (
        <div className='w-full m-10 bg-slate-50 rounded-xl'>
            <Tabs>
                <TabList className="flex justify-between">
                    <Tab className="border-transparent p-4">Job Management</Tab>
                    <Tab className="border-transparent p-4">JD rewrite</Tab>
                    <Tab className="border-transparent p-4">Reachout</Tab>
                    <Tab className="border-transparent p-4">Search</Tab>
                    <Tab className="border-transparent p-4">Intake</Tab>
                    <Tab className="border-transparent p-4">Interview</Tab>
                </TabList>

                <TabPanel className="bg-white">
                    <Management></Management>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;