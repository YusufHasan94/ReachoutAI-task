import Header from "./Shared/Header/Header"
import SideNavbar from "./Shared/SideNavbar/SideNavbar"

function App() {

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <div className="w-1/4">
          <SideNavbar></SideNavbar>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
