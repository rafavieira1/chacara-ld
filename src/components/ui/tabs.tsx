"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string | React.ReactNode;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState<string>(propTabs[0]?.value || '');
  
  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const activeTabData = propTabs.find(tab => tab.value === activeTab) || propTabs[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className={cn("flex flex-wrap justify-center gap-4 mb-8", containerClassName)}>
        {propTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={cn(
              "relative px-4 py-2 rounded-full transition-all duration-300 ease-out hover:scale-105 overflow-hidden",
              tabClassName,
              activeTab === tab.value 
                ? "text-white shadow-lg border-0" 
                : "text-muted-foreground hover:text-foreground hover:shadow-md"
            )}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="activeBackground"
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className={cn(
                  "absolute inset-0 w-full h-full",
                  activeTabClassName
                )}
                style={{ 
                  margin: 0, 
                  padding: 0,
                  borderRadius: 'inherit'
                }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn("mt-0", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabData.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="w-full"
          >
            {activeTabData.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Removendo o componente FadeInDiv desnecessário e simplificando
