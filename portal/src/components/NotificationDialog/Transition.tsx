import React from "react";
import { Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
