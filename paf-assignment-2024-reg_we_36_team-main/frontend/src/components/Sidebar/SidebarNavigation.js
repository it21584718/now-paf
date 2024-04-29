import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import WorkoutStatus from '@mui/icons-material/VideoLibrary';
import CreateWorkoutStatus from '@mui/icons-material/Queue';
import CreateWorkoutPlan from '@mui/icons-material/EditCalendar';
import CreateMealPlan from '@mui/icons-material/Fastfood';
import ProfileIcon from '@mui/icons-material/AccountCircle';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Notifications",
        icon:<NotificationsIcon/>,
        path:"/notifications"
    },
    {
        title:"View Workout Status",
        icon:<WorkoutStatus/>,
        path:"/status"
    },
    {
        title:"Create Workout Status",
        icon:<CreateWorkoutStatus/>,
        path:"/create-status"
    },
    {
        title:"Create Workout Plan",
        icon:<CreateWorkoutPlan/>,
        path:"/create-workout-plan"
    },
    {
        title:"Create Meal Plan",
        icon:<CreateMealPlan/>,
        path:"/create-meal-plan"
    },
    {
        title:"Profile",
        icon:<ProfileIcon/>,
        path:"/profile"
    },
]