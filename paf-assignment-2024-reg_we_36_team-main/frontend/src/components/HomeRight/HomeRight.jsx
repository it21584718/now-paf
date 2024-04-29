import React, { useState }  from "react";
// import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const popularUser = [1, 1, 1, 1, 1];

const HomeRight = () => {
  const [darkMode, setDarkMode] = useState(false);

    const handleChangeTheme=()=>{
      setDarkMode(prevMode => !prevMode);
        console.log("handle change theme");
    }

  return (
    <div className={`py-5 sticky top ${darkMode ? 'dark' : ''}`}>
        <div className="relative flex items-center">
            <input type="text" placeholder="search user" className="py-3 rounded-full text-gray-500 pl-12 w-full bg-slate-100"/>
            
            <div className="absolute top-0 left-0 pl-3 pt-3">
                <SearchIcon className="text-gray-500"/>
            </div>

            {darkMode ? (
          <Brightness7Icon color="primary" className="ml-3 cursor-pointer" onClick={handleChangeTheme}/>
        ) : (
          <Brightness4Icon className="ml-3 cursor-pointer" onClick={handleChangeTheme}/>
        )}

        </div>
      {/* <SearchUser /> */}

      <Card className="p-5 mt-8">
        <div className="flex justify-between py-5 items-center text">
          <p className="pl-4 text-base font-semibold opacity-70">Popular Users</p>
          <p className="text-xs font-semibold opacity-95">View all</p>
        </div>

        <div>
          {popularUser.map((item)=> <PopularUserCard />)}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
