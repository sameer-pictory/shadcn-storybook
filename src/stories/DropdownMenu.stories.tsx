import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { useState } from "react";

// Define the variants
type DropdownVariant = "basic" | "submenu" | "checkbox" | "radio";

interface DropdownDemoProps {
  variant: DropdownVariant;
}

const DropdownMenuDemo = ({ variant = "basic" }: DropdownDemoProps) => {
  // State for checkbox and radio items
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [position, setPosition] = useState("bottom");

  // Basic dropdown content
  const renderBasicContent = () => (
    <DropdownMenuContent className="w-56 bg-white">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

  // Submenu dropdown content
  const renderSubmenuContent = () => (
    <DropdownMenuContent className="w-56 bg-white">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem>Help Center</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Community Forums</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  );

  // Checkbox dropdown content
  const renderCheckboxContent = () => (
    <DropdownMenuContent className="w-56 bg-white">
      <DropdownMenuLabel>Preferences</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        checked={bookmarksChecked}
        onCheckedChange={setBookmarksChecked}
      >
        Show Bookmarks
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={urlsChecked}
        onCheckedChange={setUrlsChecked}
      >
        Show Full URLs
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  );

  // Radio dropdown content
  const renderRadioContent = () => (
    <DropdownMenuContent className="w-56 bg-white">
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  );

  // Render the dropdown based on variant
  const renderDropdownContent = () => {
    switch (variant) {
      case "submenu":
        return renderSubmenuContent();
      case "checkbox":
        return renderCheckboxContent();
      case "radio":
        return renderRadioContent();
      default:
        return renderBasicContent();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open {variant} Menu</Button>
        </DropdownMenuTrigger>
        {renderDropdownContent()}
      </DropdownMenu>
    </div>
  );
};

const meta = {
  title: "Pictory/DropdownMenu",
  component: DropdownMenuDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["basic", "submenu", "checkbox", "radio"],
      description: "Type of dropdown menu to display",
      defaultValue: "basic",
    },
  },
} satisfies Meta<DropdownDemoProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single story for all dropdown variants
export const DropdownMenuVariants: Story = {
  args: {
    variant: "basic",
  },
};
