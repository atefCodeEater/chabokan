"use client";
import { FaAngleDown } from "react-icons/fa";
import { CssVariable } from "next/dist/compiled/@next/font";
import React, { HTMLAttributes, HTMLProps, useState } from "react";
import { Tooltip, Button } from "@heroui/react";

export function CustomDropDown({
  title,
  ResolveComponets,
  buttonClass,
  contentClass,
}: {
  title: string;
  ResolveComponets: React.ReactNode;
  buttonClass: string;
  contentClass: string;
}) {
  return (
    <Tooltip
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            },
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          },
        },
      }}
      offset={24}
      containerPadding={0}
      // disableAnimation

      className="flex transition-all delay-300 w-screen h-auto rounded-none  bg-slate-700"
      content={ResolveComponets}
      placement="bottom"
    >
      <div className="flex items-center space-x-2 w-24">
        <FaAngleDown
          style={{ fontSize: 14, fontWeight: "" }}
          className="text-white  "
        />
        <button className={buttonClass}>{title}</button>
      </div>
    </Tooltip>
  );
}
