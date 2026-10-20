import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";

/** Every page outside the map: case and story pages, the case index, My stories and the legal pages. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
