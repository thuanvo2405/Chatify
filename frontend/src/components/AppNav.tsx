import { Bell, ContactRound, House, MessageCircle } from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  { to: "/", icon: House, label: "Home" },
  { to: "/chat", icon: MessageCircle, label: "Chat" },
  { to: "/contacts", icon: ContactRound, label: "Contact" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
];

function AppNav() {
  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-line mx-2 flex items-center gap-2 px-2 py-3 text-xl transition-colors ${
                  isActive
                    ? "bg-accent text-primary doodle-radius border-primary border-2"
                    : "hover:bg-accent hover:text-primary doodle-radius-hover"
                }`
              }
            >
              <Icon size={30} />
              {label}
            </NavLink>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default AppNav;
