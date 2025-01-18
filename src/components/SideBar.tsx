import React from "react";
import { SlBubble, SlFolderAlt, SlSettings, SlNotebook } from "react-icons/sl";
import BLButton from "./BLButton";
import SideContext from "./SideContext";
import { useSideContext } from "../stores/SideContextProvider";

/**
 * SideBar 组件是一个侧边栏组件，用于展示一系列带有图标和文本的按钮。
 *
 * @returns 返回渲染后的侧边栏元素。
 */
const SideBar: React.FC = () => {
  const { updateContent } = useSideContext();
 

  const itemButtons = [
    {
      icon: SlFolderAlt,
      context: "工作區",
      click: () => {
        updateContent(
          <div>工作區的内容</div>,
          "工作區"
        );
      },
    },
    {
      icon: SlNotebook,
      context: "目錄",
      click: () => {
        updateContent(<div>目錄的内容</div>, "目錄");
      },
    },
    {
      icon: SlBubble,
      context: "助手",
      click: () => {
        updateContent(<div>助手的内容</div>, "助手");
      },
    },
    {
      icon: SlSettings,
      context: "設置",
      click: () => {
        updateContent(<div>設置的内容</div>, "設置");
      },
    },
  ];

  return (
    <div className="sidebar">
      <div id="side-menu">
        {itemButtons.map((item, index) => (
          <BLButton
            key={index}
            icon={item.icon}
            context={item.context}
            click={item.click}
          />
        ))}
      </div>
      <SideContext idname="side-context" />
    </div>
  );
};

export default SideBar;
