import { Button } from "@/components/ui/button";
import { CodeSnippet } from "@/components/CodeSnippet";
import { DialogComponent } from "@/components/ui/dialog";
const buttonVariants = [
  {
    name: "Primary",
    code: `<Button variant="primary">Click me</Button>`,
    component: <Button variant="primary">Primary</Button>,
  },
  {
    name: "Primary Gray",
    code: `<Button variant="primaryGray">Primary Gray</Button>`,
    component: <Button variant="primaryGray">Primary Gray</Button>,
  },
  {
    name: "Secondary Outlined",
    code: `<Button variant="secondaryOutlined">Secondary Outlined</Button>`,
    component: <Button variant="secondaryOutlined">Secondary Outlined</Button>,
  },
  {
    name: "Destructive",
    code: `<Button variant="destructive">Delete</Button>`,
    component: <Button variant="destructive">Delete</Button>,
  },
  {
    name: "Destructive Outlined",
    code: `<Button variant="destructiveOutlined">Cancel</Button>`,
    component: <Button variant="destructiveOutlined">Cancel</Button>,
  },
];

function App() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Button Components</h1>
      <div className="space-y-8">
        {buttonVariants.map((variant) => (
          <div key={variant.name}>
            <h2 className="text-2xl font-semibold mb-4">{variant.name}</h2>
            <CodeSnippet code={variant.code} component={variant.component} />
          </div>
        ))}
      </div>
      <DialogComponent />
    </div>
  );
}

export default App;
