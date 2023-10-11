import { cva, type VariantProps } from "cva";

export const cardVariants = cva({
  base: "rounded p-4 shadow-sm",
});

export type CardVariants = VariantProps<typeof cardVariants>;
