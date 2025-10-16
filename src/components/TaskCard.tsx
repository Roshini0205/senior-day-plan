import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Circle, Pill, Calendar as CalendarIcon, ShoppingBag } from "lucide-react";

interface TaskCardProps {
  id: string;
  name: string;
  time: string;
  priority: "high" | "medium" | "low";
  completed?: boolean;
  onToggleComplete?: (id: string) => void;
  category?: string;
}

const TaskCard = ({ id, name, time, priority, completed = false, onToggleComplete, category }: TaskCardProps) => {
  const getIcon = () => {
    if (category?.toLowerCase().includes("medicine")) return <Pill className="h-8 w-8" />;
    if (category?.toLowerCase().includes("appointment")) return <CalendarIcon className="h-8 w-8" />;
    if (category?.toLowerCase().includes("shopping")) return <ShoppingBag className="h-8 w-8" />;
    return <CalendarIcon className="h-8 w-8" />;
  };

  const getPriorityColor = () => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className={`transition-all hover:shadow-md ${completed ? "opacity-60" : ""}`}>
      <CardContent className="p-8">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-1">
            <div className={getPriorityColor()}>
              {getIcon()}
            </div>
            <div className="flex-1">
              <h3 className={`text-2xl font-semibold mb-1 ${completed ? "line-through text-muted-foreground" : ""}`}>
                {name}
              </h3>
              <p className="text-lg text-muted-foreground">
                {time}
              </p>
            </div>
          </div>

          {onToggleComplete && (
            <Button
              size="lg"
              variant={completed ? "outline" : "default"}
              onClick={() => onToggleComplete(id)}
              className="gap-3 min-w-[180px]"
            >
              {completed ? (
                <>
                  <CheckCircle2 className="h-7 w-7" />
                  Completed
                </>
              ) : (
                <>
                  <Circle className="h-7 w-7" />
                  Mark Done
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
