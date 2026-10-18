"use client";

import { Button } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import { Icon } from "@/components/brand";

type Props = Omit<ComponentProps<typeof Button>, "children" | "aria-label"> & {
  icon: keyof typeof Icon;
  /** Read out by screen readers, since the button shows only an icon. */
  label: string;
  /** `small` for tight spots like the pin picker. */
  size?: "small";
};

/** A round button showing one SVG icon, centred by layout rather than by a text glyph's metrics. */
export function IconButton({ icon, label, size, className, ...props }: Props) {
  const classes = ["icon-btn", size === "small" && "small", className].filter(Boolean).join(" ");
  return (
    <Button aria-label={label} className={classes} {...props}>
      {Icon[icon]}
    </Button>
  );
}
