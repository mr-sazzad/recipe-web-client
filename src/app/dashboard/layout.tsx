import DesktopSidebar from "@/components/Desktop-sidebar";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <DesktopSidebar />
        <MobileFooter />
        <div className="lg:ml-[250px] p-5">{children}</div>
      </Wrapper>
    </div>
  );
};

export default DashboardLayout;
