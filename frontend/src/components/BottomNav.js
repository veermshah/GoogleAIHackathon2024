import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import style from "../style.css";

export default function SimpleBottomNavigation(props) {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                // Navigate to Home
                navigate("/Home");
                break;
            case 1:
                // Navigate to AddEntry
                navigate("/AddEntry");
                break;
            case 2:
                // Navigate to Support
                navigate("/Support");
                break;
            default:
                // Navigate to Home by default
                navigate("/");
                break;
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-full">
            <AppBar position="static">
                <BottomNavigation
                    showLabels
                    value={props.value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon /> } className="poppins-bold"/>
                    <BottomNavigationAction
                        label="Add Entry"
                        icon={<LocalHospitalIcon />}
                        className="poppins-bold"
                    />
                    <BottomNavigationAction
                        label="Support"
                        icon={<CalendarMonthIcon />}
                        className="poppins-bold"
                    />
                </BottomNavigation>
            </AppBar>
        </div>
    );
}
