import React from "react";
export function Image({ src, ...other }: any) {
  return <img src={src} {...other} />;
}
