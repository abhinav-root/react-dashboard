import { GoDashboard } from "react-icons/go";
import { BsGlobe, BsInbox } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { TbBook } from "react-icons/tb";
import { IoDocumentOutline } from "react-icons/io5";
import { RiAppsLine } from "react-icons/ri";
import SideNavLink from "./SideNavLink";
import { BiSupport } from "react-icons/bi";
import { AiOutlineFolderOpen, AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <aside>
      <div className="wrapper">
        <div className="sidenav-main">
          <h3 className="subheading">Main</h3>
          <div className="content">
            <SideNavLink
              title={"Dashboard"}
              Logo={GoDashboard}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Discover"}
              Logo={BsGlobe}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Users"}
              Logo={BiUserCircle}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Documents"}
              Logo={TbBook}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Applications"}
              Logo={RiAppsLine}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Pages"}
              Logo={IoDocumentOutline}
              size={20}
              color="gray"
            />
          </div>
        </div>
        <div className="sidenav-secondary">
          <h3 className="subheading">Secondary</h3>
          <div className="content">
            <SideNavLink
              title={"Support Center"}
              Logo={BiSupport}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Inbox"}
              Logo={BsInbox}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"File Manager"}
              Logo={AiOutlineFolderOpen}
              size={20}
              color="gray"
            />
            <SideNavLink
              title={"Data List"}
              Logo={AiOutlineUnorderedList}
              size={20}
              color="gray"
            />
          </div>
        </div>
        <div className="sidebar-other">
          <SideNavLink
            title={"Settings"}
            Logo={IoMdSettings}
            size={20}
            color="gray"
          />
          <SideNavLink
            title={"Logout"}
            Logo={IoLogOutOutline}
            size={20}
            color="gray"
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
