"use client";

import React, { useState, CSSProperties } from "react";
import clsx from "clsx";

export type Tab = {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
  variant?: "underline" | "boxed" | "pills" | "vertical" | "icon" | "segmented";
  className?: string;

  tabBgColor?: string;
  tabTextColor?: string;
  activeTabTextColor?: string;
  activeTabBgColor?: string;
  contentBgColor?: string;

  fullWidthTabs?: boolean;
  showBottomBorder?: boolean;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  variant = "underline",
  className = "",
  tabBgColor = "#ffffff",
  tabTextColor = "#4b5563",
  activeTabTextColor = "#ffffff",
  activeTabBgColor = "#1d4ed8",
  contentBgColor = "#ffffff",
  fullWidthTabs = false,
  showBottomBorder = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isActive = (index: number) => index === activeIndex;

  const baseTabClass =
    "transition-all duration-200 cursor-pointer select-none flex items-center justify-center";

  const tabClass = (index: number): string => {
    const active = isActive(index);

    switch (variant) {
      case "underline":
        return clsx(
          baseTabClass,
          "relative px-4 py-2 text-sm whitespace-nowrap",
          fullWidthTabs && "flex-1 text-center",
          active &&
            'font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-current after:content-[""]'
        );

      case "boxed":
        return clsx(
          baseTabClass,
          "px-4 py-2 text-sm rounded-t-md border",
          fullWidthTabs && "flex-1 text-center"
        );

      case "pills":
        return clsx(
          baseTabClass,
          "px-4 py-1 text-sm rounded-full border",
          fullWidthTabs && "flex-1 text-center"
        );

      case "vertical":
        return clsx(
          baseTabClass,
          "px-4 py-3 text-sm whitespace-nowrap border-l-4 w-full justify-start"
        );

      case "icon":
        return clsx(baseTabClass, "p-3 rounded-md", fullWidthTabs && "flex-1");

      case "segmented":
        return clsx(
          baseTabClass,
          "px-4 py-2 text-sm border",
          fullWidthTabs && "flex-1 text-center",
          index === 0 && "rounded-l-md",
          index === tabs.length - 1 && "rounded-r-md",
          index !== tabs.length - 1 && "-mr-px"
        );

      default:
        return "";
    }
  };

  const tabStyle = (index: number): CSSProperties => {
    const active = isActive(index);

    return {
      backgroundColor: active ? activeTabBgColor : tabBgColor,
      color: active ? activeTabTextColor : tabTextColor,
    };
  };

  return (
    <div
      className={clsx(
        "w-full flex",
        variant === "vertical" ? "flex-row" : "flex-col",
        className
      )}
    >
      <div
        className={clsx(
          variant === "vertical"
            ? "flex flex-col w-48 border-r border-gray-200"
            : "flex flex-wrap",
          showBottomBorder &&
            variant === "underline" &&
            "border-b border-gray-200",
          variant === "boxed" && "border-b border-gray-200",
          variant === "pills" && "gap-2",
          variant === "segmented" &&
            "border border-gray-300 rounded-md overflow-hidden",
          fullWidthTabs && variant !== "vertical" && "w-full"
        )}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={tabClass(i)}
            style={tabStyle(i)}
            title={variant === "icon" ? tab.label : undefined}
          >
            {tab.icon && (
              <span
                className={clsx(variant === "icon" ? "" : "inline-block mr-1")}
              >
                {tab.icon}
              </span>
            )}
            {variant !== "icon" && tab.label}
          </button>
        ))}
      </div>

      <div
        className={clsx(
          "mt-4 p-4 rounded-b-md",
          variant === "vertical" && "flex-1 mt-0 ml-4 rounded-md"
        )}
        style={{ backgroundColor: contentBgColor }}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
