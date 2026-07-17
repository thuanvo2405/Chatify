import AppNav from "./AppNav";
import FooterSidebar from "./FooterSidebar";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="doodle-radius bg-tertiary-foreground flex h-full flex-col border-2 p-4">
      <Logo />
      <AppNav />
      <FooterSidebar />
    </div>
  );
}

export default Sidebar;
