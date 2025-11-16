import config from "@/config/config.json";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";

const { enable, content } = config.announcement;

const Announcement = () => {
  if (!enable || !content) {
    return null;
  }

  return (
    <div className="relative z-999 bg-body dark:bg-darkmode-body shadow-[1px_0_10px_7px_rgba(154,154,154,0.11)] px-4 py-4 pr-12 md:text-lg transition-all duration-300">
      <p dangerouslySetInnerHTML={{ __html: markdownify(content) }} />
    </div>
  );
};

export default Announcement;
