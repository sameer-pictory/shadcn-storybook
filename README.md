# Shadcn UI Components

A collection of reusable React components built with React, Tailwind CSS, and Storybook.

## Components

This package includes the following components:

- Button (with multiple variants)
- Dialog (with multiple variants)
- DropdownMenu (with various content types)

## Installation

```bash
npm install sameer-shadcn-storybook
```

Or with yarn:

```bash
yarn add sameer-shadcn-storybook
```

## Tailwind CSS Setup

This library requires Tailwind CSS. Make sure your `tailwind.config.js` file includes the path to the components:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include your project files
    "./src/**/*.{js,jsx,ts,tsx}",
    // Include shadcn-storybook components
    "./node_modules/sameer-shadcn-storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Also, import the package's CSS in your main CSS file:

```css
@import "sameer-shadcn-storybook/src/index.css";
```

## Usage

### Button

```jsx
import { Button } from "sameer-shadcn-storybook";

function MyComponent() {
  return (
    <Button
      variant="primary"
      size="medium"
      label="Click Me"
      onClick={() => console.log("Button clicked!")}
    />
  );
}
```

Available variants:

- primary (default)
- primaryGray
- secondaryOutlined
- destructive
- destructiveOutlined

Available sizes:

- small
- medium (default)
- large

### Dialog

```jsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "sameer-shadcn-storybook";
import { Button } from "sameer-shadcn-storybook";

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" label="Open Dialog" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>
            This is a description of the dialog content.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <Button variant="outline" label="Cancel" />
          <Button variant="primary" label="Confirm" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### DropdownMenu

```jsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "sameer-shadcn-storybook";
import { Button } from "sameer-shadcn-storybook";

function MyComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" label="Open Menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Requirements

- React 18+
- Tailwind CSS 3+

## License

MIT
