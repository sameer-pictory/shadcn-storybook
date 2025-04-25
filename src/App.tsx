import { Button } from "@/components/ui/button";
import { CodeSnippet } from "@/components/CodeSnippet";
import { DialogComponent } from "@/components/ui/dialog";
const buttonVariants = [
  {
    name: "Default",
    code: `<Button>Click me</Button>`,
    component: <Button>Click me</Button>,
  },
  {
    name: "Secondary",
    code: `<Button variant="secondary">Secondary</Button>`,
    component: <Button variant="secondary">Secondary</Button>,
  },
  {
    name: "Destructive",
    code: `<Button variant="destructive">Delete</Button>`,
    component: <Button variant="destructive">Delete</Button>,
  },
  {
    name: "Outline",
    code: `<Button variant="outline">Outline</Button>`,
    component: <Button variant="outline">Outline</Button>,
  },
  {
    name: "Ghost",
    code: `<Button variant="ghost">Ghost</Button>`,
    component: <Button variant="ghost">Ghost</Button>,
  },
  {
    name: "Link",
    code: `<Button variant="link">Link</Button>`,
    component: <Button variant="link">Link</Button>,
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
