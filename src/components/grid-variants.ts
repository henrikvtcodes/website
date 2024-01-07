import { cva, type VariantProps } from "class-variance-authority";

export const gridVariants = cva({
  variants: {
    width: {
      quarter: "col-span-2",
      half: "col-span-4",
      threeQuarter: "col-span-6",
      full: "col-span-8",
    },
    hStart: {
      left: "",
      right: "",
    },
  },
  compoundVariants: [],
});

export type GridVariants = VariantProps<typeof gridVariants>;
