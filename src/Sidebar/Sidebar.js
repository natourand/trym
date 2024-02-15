import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
/*
import FriendsIcon from './friends.png';
import MemoriesIcon from './memories.png';
import SavedIcon from './save.png';
import GroupsIcon from './groups.png';
import VideosIcon from './video.png';
import MarketIcon from './store.png';
import PagesIcon from './pages.png';
import FeedsIcon from './feed.png';
import EventsIcon from './calendar.png';
*/
import PeopleIcon from '@material-ui/icons/People';
import MemoriesIcon from '@material-ui/icons/History';
import SavedIcon from '@material-ui/icons/Bookmark';
import GroupsIcon from '@material-ui/icons/Group';
import VideosIcon from '@material-ui/icons/VideoLibrary';
import MarketIcon from '@material-ui/icons/Storefront';
import PagesIcon from '@material-ui/icons/Flag';
import FeedsIcon from '@material-ui/icons/Fastfood';
import EventsIcon from '@material-ui/icons/Event';
import { ExpandMoreRounded } from '@material-ui/icons';

/*
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src='https://www.facebook.com/images/fb_icon_325x325.png' title='Rahul'/> 
      <SidebarRow Icon={FriendsIcon} title='friends'/>
      <SidebarRow Icon={MemoriesIcon} title='memories'/> 
      <SidebarRow Icon={SavedIcon} title='saved'/> 
      <SidebarRow Icon={GroupsIcon} title='groups'/> 
      <SidebarRow Icon={VideosIcon} title='videos'/> 
      <SidebarRow Icon={MarketIcon} title='market'/> 
      <SidebarRow Icon={PagesIcon} title='pages'/> 
      <SidebarRow Icon={FeedsIcon} title='feeds'/> 
      <SidebarRow Icon={EventsIcon} title='events'/> 
    </div>
  );
}*/

function Sidebar() {
  return (
    <div className="sideBar">
      <SidebarRow src='./user.png' title='Rahul'/> 
      <SidebarRow Icon={PeopleIcon} title='friends'/>
      <SidebarRow Icon={MemoriesIcon} title='memories'/> 
      <SidebarRow Icon={SavedIcon} title='saved'/> 
      <SidebarRow Icon={GroupsIcon} title='groups'/> 
      <SidebarRow Icon={VideosIcon} title='videos'/> 
      <SidebarRow Icon={MarketIcon} title='market'/> 
      <SidebarRow Icon={PagesIcon} title='pages'/> 
      <SidebarRow Icon={FeedsIcon} title='feeds'/> 
      <SidebarRow Icon={EventsIcon} title='events'/> 
      <SidebarRow Icon = {ExpandMoreRounded} title='see more'/>
    </div>
  );
}
export default Sidebar;
