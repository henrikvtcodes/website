import { cva, type VariantProps } from "cva";

export const borderVariants = cva({
  base: "border",
  variants: {
    
  },
});

export type BorderVariants = VariantProps<typeof borderVariants>;
