import { ReactNode } from "react";
import { LazyMotion } from "framer-motion";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function MotionLazyContainer({ children }: Props) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
