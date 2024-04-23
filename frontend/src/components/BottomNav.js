import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="fixed bottom-0 left-0 w-full">
        <AppBar position="static">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Doctors" icon={<LocalHospitalIcon />} />
                <BottomNavigationAction label="Support" icon={<CalendarMonthIcon />} />
                <BottomNavigationAction label="profile" icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </AppBar>
    </div>
  );
}