import {Outlet} from "react-router-dom";
import ThemeToggleButton from "@/layout/ThemeToggleButton.jsx";

const Dashboard = () => {
    return(
        <div style={{width: '100%', height: "100vh"}}>
            <ThemeToggleButton/>
            Dashboard


            <Outlet/>
        </div>
    )
}
export default Dashboard;
