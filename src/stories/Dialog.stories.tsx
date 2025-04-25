import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info as InfoIcon,
} from "lucide-react";
import React from "react";

// Dialog variant types
type DialogVariant = "default" | "success" | "error" | "warning" | "info";

interface DialogDemoProps {
  variant: DialogVariant;
  customIcon?: React.ReactNode;
}

// Get icon and styles based on variant
const getVariantDetails = (variant: DialogVariant = "default") => {
  switch (variant) {
    case "success":
      return {
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        headerClass: "border-b-2 border-green-200 pb-3",
        titleClass: "text-green-700 flex items-center gap-2",
        title: "Success Dialog",
        description: "This dialog indicates successful completion of an action",
        content: "Your action was completed successfully!",
        buttonText: "Continue",
      };
    case "error":
      return {
        icon: <AlertCircle className="h-6 w-6 text-red-500" />,
        headerClass: "border-b-2 border-red-200 pb-3",
        titleClass: "text-red-700 flex items-center gap-2",
        title: "Error Dialog",
        description: "This dialog indicates an error has occurred",
        content:
          "There was an error processing your request. Please try again.",
        buttonText: "Delete",
      };
    case "warning":
      return {
        icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
        headerClass: "border-b-2 border-amber-200 pb-3",
        titleClass: "text-amber-700 flex items-center gap-2",
        title: "Warning Dialog",
        description: "This dialog provides a warning to the user",
        content: "This action cannot be undone. Please proceed with caution.",
        buttonText: "Proceed",
      };
    case "info":
      return {
        icon: <InfoIcon className="h-6 w-6 text-blue-500" />,
        headerClass: "border-b-2 border-blue-200 pb-3",
        titleClass: "text-blue-700 flex items-center gap-2",
        title: "Info Dialog",
        description: "This dialog provides information to the user",
        content: "Here is some important information you should know about.",
        buttonText: "OK",
      };
    default:
      return {
        icon: null,
        headerClass: "",
        titleClass: "",
        title: "Default Dialog",
        description: "This is a standard dialog with no specific variant",
        content: "Content for the default dialog example.",
        buttonText: "Confirm",
      };
  }
};

const DialogDemo = ({ variant = "default", customIcon }: DialogDemoProps) => {
  const [open, setOpen] = React.useState(false);

  const {
    icon: defaultIcon,
    headerClass,
    titleClass,
    title,
    description,
    content,
    buttonText,
  } = getVariantDetails(variant);

  const icon = customIcon || defaultIcon;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open {variant} Dialog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className={headerClass}>
            <DialogTitle className={titleClass}>
              {icon}
              {title}
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>{content}</p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="mr-2"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              {buttonText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Default metadata for the story
const meta = {
  title: "Pictory/Dialog",
  component: DialogDemo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    themes: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "error", "warning", "info"],
      description: "Dialog variant style",
      defaultValue: "default",
    },
    customIcon: {
      control: "object",
      description: "Custom icon to override the default variant icon",
    },
  },
} satisfies Meta<DialogDemoProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single story for all dialog variants
export const DialogVariants: Story = {
  args: {
    variant: "default",
  },
};
