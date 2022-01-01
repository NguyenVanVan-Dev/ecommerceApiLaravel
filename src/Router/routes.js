import Dashboard from "../Components/Manage/Dashboard";
import Profile from "../Components/Manage/Profile";
import PageContent from "../Components/Manage/PageContent";
const routes = [
    {path:'/admin', exact:true,name:'Admin'},
    {path:'/admin/dashboard', exact:true,name:'Dashboard',component: PageContent},
    {path:'/admin/profile', exact:true,name:'Profile',component: Profile},
];

export default routes;