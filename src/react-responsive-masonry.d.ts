declare module "react-responsive-masonry" {
  import { ComponentType, ReactNode } from "react";

  interface MasonryProps {
    children?: ReactNode;
    columnsCount?: number;
    gutter?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  interface ResponsiveMasonryProps {
    children?: ReactNode;
    columnsCountBreakPoints?: Record<number, number>;
    className?: string;
    style?: React.CSSProperties;
  }

  export const ResponsiveMasonry: ComponentType<ResponsiveMasonryProps>;
  const Masonry: ComponentType<MasonryProps>;
  export default Masonry;
}
