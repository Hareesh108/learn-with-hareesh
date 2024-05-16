import { useState } from "react";
import "./Tabs.css"; // You can create a CSS file for styling the tabs
import { GetTheResponse } from "./hooks/useTransition";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={activeTab === 0 ? "tab active" : "tab"}
          onClick={() => handleTabClick(0)}
        >
          useTransition
        </div>
        <div
          className={activeTab === 1 ? "tab active" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={activeTab === 2 ? "tab active" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
        <div
          className={activeTab === 3 ? "tab active" : "tab"}
          onClick={() => handleTabClick(3)}
        >
          Tab 4
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <GetTheResponse />}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
        {activeTab === 3 && <div>Content for Tab 4</div>}
      </div>
    </div>
  );
};

export default Tabs;
