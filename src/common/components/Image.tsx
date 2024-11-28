import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

export type ImageRatio =
  | "4/3"
  | "3/4"
  | "6/4"
  | "4/6"
  | "16/9"
  | "9/16"
  | "21/9"
  | "9/21"
  | "1/1";

type IProps = React.HTMLAttributes<HTMLSpanElement> & LazyLoadImageProps;

interface Props extends IProps {
  ratio?: ImageRatio;
  src: string;
  disabledEffect?: boolean;
  effect?: string;
}

export default function Image({
  ratio,
  disabledEffect = false,
  effect = "blur",
  ...other
}: Props) {
  if (ratio) {
    return (
      <span
        className={`relative block w-full overflow-hidden ${getRatioClass(
          ratio
        )}`}
      >
        <LazyLoadImage
          wrapperClassName="absolute inset-0 w-full h-full bg-cover"
          effect={disabledEffect ? undefined : effect}
          placeholderSrc="/assets/placeholder.svg"
          className="w-full h-full object-cover"
          {...other}
        />
      </span>
    );
  }

  return (
    <span className={"block overflow-hidden"}>
      <LazyLoadImage
        wrapperClassName="w-full h-full bg-cover"
        effect={disabledEffect ? undefined : effect}
        placeholderSrc="/assets/images/placeholder.svg"
        className="w-full h-full object-cover"
        {...other}
      />
    </span>
  );
}

function getRatioClass(ratio = "1/1") {
  return {
    "4/3": "pb-[calc(100%/4*3)]",
    "3/4": "pb-[calc(100%/3*4)]",
    "6/4": "pb-[calc(100%/6*4)]",
    "4/6": "pb-[calc(100%/4*6)]",
    "16/9": "pb-[calc(100%/16*9)]",
    "9/16": "pb-[calc(100%/9*16)]",
    "21/9": "pb-[calc(100%/21*9)]",
    "9/21": "pb-[calc(100%/9*21)]",
    "1/1": "pb-[100%]",
  }[ratio];
}
