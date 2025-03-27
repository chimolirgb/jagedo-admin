import { useState } from "react";
import {
  Home,
  ShoppingCart,
  LayoutGrid,
  Folder,
  Users,
  BarChart,
  UserCog,
  Briefcase,
  ClipboardList,
  HelpCircle,
  FileQuestion,
} from "lucide-react";

const menuItems = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Shop App", icon: <ShoppingCart />, path: "/shop" },
  { name: "Workspace", icon: <LayoutGrid />, path: "/workspace" },
  { name: "Projects", icon: <Folder />, path: "/projects" },
  { name: "Sales", icon: <BarChart />, path: "/sales" },
  { name: "User Management", icon: <Users />, path: "/users" },
  { name: "Registers", icon: <UserCog />, path: "/registers" },
  { name: "Jobs", icon: <Briefcase />, path: "/jobs" },
  { name: "Orders", icon: <ClipboardList />, path: "/orders" },
  { name: "Help Desk", icon: <HelpCircle />, path: "/help" },
  { name: "FAQs", icon: <FileQuestion />, path: "/faqs" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`h-screen ${collapsed ? "w-16" : "w-56"} bg-gray-500 text-white transition-all`}>
        <img
          src="/images/jagedo logo.png"  
          alt="Jagedo Admin Logo"
          className={`transition-all ${collapsed ? "w-15 h-5" : "w-30 h-10"}`}
        />
      <div className="flex items-center justify-between p-4">
        <button onClick={() => setCollapsed(!collapsed)} className="text-white">
          ☰
        </button>
      </div>
      <ul className="mt-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center gap-6 p-4 hover:bg-gray-700 cursor-pointer">
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
