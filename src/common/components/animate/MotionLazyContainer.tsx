import { ReactNode } from "react";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("@/common/components/animate/features").then(
    (res: { default: any }) => res.default
  );

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
