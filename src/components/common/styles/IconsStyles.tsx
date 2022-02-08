import React from "react";
import { Icon } from "./icons.styles";

interface Props {
  className: any;

  // any props that come into the component
}

export default function Icons({ className }: Props) {
  return <Icon className={className} />;
}
