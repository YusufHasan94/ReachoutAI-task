import CategoryTabs from "./Pages/Tabs/CategoryTabs"
import Header from "./Shared/Header/Header"
import SideNavbar from "./Shared/SideNavbar/SideNavbar"
import Submenu from "./Shared/Submenu/Submenu"

function App() {

  return (
    <div className="">
      <div>
        <Header></Header>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <SideNavbar></SideNavbar>
        </div>
        <div className="m-4 bg-slate-50 w-full h-28 flex flex-col items-center rounded-xl">
          <Submenu></Submenu>
          <CategoryTabs></CategoryTabs>
        </div>
      </div>
    </div>
  )
}

export default App
