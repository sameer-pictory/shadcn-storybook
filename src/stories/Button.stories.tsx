import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonProps } from "./Button";

// Create a type for the variant
type ButtonVariant =
  | "primary"
  | "primaryGray"
  | "secondaryOutlined"
  | "destructive"
  | "destructiveOutlined";

// Create a custom ButtonWithVariant type that extends ButtonProps
interface ButtonWithVariantProps {
  variant?: ButtonVariant;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

// Function to render the button based on the variant
const PictoryButton = (props: ButtonWithVariantProps) => {
  const { variant = "primary", ...rest } = props;

  // Map variant to actual button props
  const buttonProps: ButtonProps = {
    ...rest,
    primary: false, // Default value
  };

  switch (variant) {
    case "primary":
      buttonProps.primary = true;
      buttonProps.backgroundColor = "#5939A2";
      buttonProps.borderColor = "#5939A2";
      buttonProps.textColor = "#FFFFFF";
      buttonProps.hoverBackgroundColor = "#6F47CB"; // Slightly darker on hover
      buttonProps.hoverBorderColor = "#6F47CB";
      buttonProps.hoverTextColor = "#FFFFFF";
      break;
    case "primaryGray":
      buttonProps.primary = false;
      buttonProps.backgroundColor = "#121212";
      buttonProps.borderColor = "#121212";
      buttonProps.textColor = "#FFFFFF";
      buttonProps.hoverBackgroundColor = "#3F3F3F"; // Slightly lighter on hover
      buttonProps.hoverBorderColor = "#3F3F3F";
      buttonProps.hoverTextColor = "#FFFFFF";
      break;
    case "secondaryOutlined":
      buttonProps.primary = false;
      buttonProps.backgroundColor = "#FFFFFF";
      buttonProps.borderColor = "#D1D1D1";
      buttonProps.textColor = "#121212";
      buttonProps.hoverBackgroundColor = "#EBEBEB";
      buttonProps.hoverTextColor = "#121212";
      buttonProps.hoverBorderColor = "#D1D1D1";
      break;
    case "destructive":
      buttonProps.primary = false;
      buttonProps.backgroundColor = "#EF4444";
      buttonProps.borderColor = "#EF4444";
      buttonProps.textColor = "#FFFFFF";
      buttonProps.hoverBackgroundColor = "#dc2626"; // Slightly darker on hover
      buttonProps.hoverTextColor = "#FFFFFF";
      buttonProps.hoverBorderColor = "#EF4444";
      break;
    case "destructiveOutlined":
      buttonProps.primary = false;
      buttonProps.backgroundColor = "transparent";
      buttonProps.borderColor = "#FBB1C4";
      buttonProps.textColor = "#D50B3E";
      buttonProps.hoverBackgroundColor = "#FEE2E2";
      buttonProps.hoverTextColor = "#B91C1C";
      buttonProps.hoverBorderColor = "#EF4444";
      break;
  }

  return <Button {...buttonProps} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Pictory/Button",
  component: PictoryButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: [
        "primary",
        "primaryGray",
        "secondaryOutlined",
        "destructive",
        "destructiveOutlined",
      ],
      control: { type: "select" },
      description: "Button variant style",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    label: {
      control: "text",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} as Meta<ButtonWithVariantProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWithVariants: Story = {
  args: {
    variant: "primary",
    label: "Button",
    size: "medium",
  },
};
