import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  code: string;
  component: React.ReactNode;
  className?: string;
}

export function CodeSnippet({ code, component, className }: CodeSnippetProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="rounded-lg border bg-card p-4">{component}</div>
      <div className="relative">
        <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
          <code className="text-sm font-mono">{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-4"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          Copy
        </Button>
      </div>
    </div>
  );
}
