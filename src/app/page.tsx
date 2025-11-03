import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Home() {

  const something = Math.random() > 0.5; // or some other logic that returns boolean

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className={cn("text-3xl font-bold underline",
        something && "text-red-500",
        something === false && "text-blue-500"
      )}>
        Hello world!
      </div>
      <Button>Click me</Button>
    </div>
  );
}
