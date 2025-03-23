"use client";

import { useClientTranslations } from "@/libs/i18n-client";
import dynamic from "next/dynamic";

/**
 * Render button theme chỉ ở client để không bị lỗi hydration do ở server không lấy được theme
 */
const ThemeButtonOnlyClient = dynamic(() => import("../../features/ThemeButton").then((x) => x.ThemeButton), {
  ssr: false,
  loading: () => <div className="flex-1 min-w-0">...</div>,
});

const LanguageButtonOnlyClient = dynamic(() => import("../../features/LanguageButton").then((x) => x.LanguageButton), {
  ssr: false,
  loading: () => <div className="flex-1 min-w-0">...</div>,
});

type Props = {};

const Header = (props: Props) => {
  const { t } = useClientTranslations();

  return (
    <div className="flex items-center w-full gap-4">
      {/* <div className="line h-1 bg-gradient-to-r from-transparent to-success flex-grow mr-5"></div> */}
      <div className="flex-1 min-w-0 gap-2 flex justify-end mb-auto items-center">
        <ThemeButtonOnlyClient />
        <LanguageButtonOnlyClient />
      </div>
    </div>
  );
};

export default Header;
