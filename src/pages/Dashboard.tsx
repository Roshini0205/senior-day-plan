import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data - replace with your API calls
const mockTasks = [
  // Empty by default - user should add their own tasks
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(mockTasks);

  // TODO: Fetch tasks from your backend
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/tasks/today")
  //     .then(res => res.json())
  //     .then(data => setTasks(data));
  // }, []);

  const handleToggleComplete = (taskId: string) => {
    // TODO: Call your backend API to mark task as complete
    // fetch(`http://localhost:5000/api/tasks/${taskId}/complete`, { method: "POST" })

    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        userRole="elderly"
        userName="John"
        onLogout={() => navigate("/login")}
      />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Today's Tasks</h2>
              <p className="text-xl text-muted-foreground">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => navigate("/add-task")}
              className="gap-3 h-16 px-8"
            >
              <Plus className="h-7 w-7" />
              Add Task
            </Button>
          </div>

          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-lg border-2 border-dashed border-border">
                <div className="text-6xl mb-6">📝</div>
                <h3 className="text-3xl font-semibold mb-3">No tasks yet</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Add your first task to get started!
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/add-task")}
                  className="gap-3 h-16 px-8"
                >
                  <Plus className="h-7 w-7" />
                  Add Your First Task
                </Button>
              </div>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  {...task}
                  onToggleComplete={handleToggleComplete}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
