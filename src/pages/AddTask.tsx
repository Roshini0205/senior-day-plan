import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const AddTask = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your backend API call
    // const response = await fetch("http://localhost:5000/api/tasks", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ taskName, startDate, endDate, time, priority })
    // });

    setTimeout(() => {
      toast({
        title: "Task created!",
        description: "Connect this form to your Node.js backend to save the task",
      });
      setLoading(false);
      // navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        userRole="elderly"
        userName="John"
        onLogout={() => navigate("/login")}
      />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-6 w-6" />
            Back to Dashboard
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Add New Task</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="taskName" className="text-xl">Task Name</Label>
                  <Input
                    id="taskName"
                    type="text"
                    placeholder="e.g., Take morning medicine"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="startDate" className="text-xl">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      className="h-14 text-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="endDate" className="text-xl">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                      className="h-14 text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="time" className="text-xl">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-xl">Priority</Label>
                  <Select value={priority} onValueChange={(value) => setPriority(value as any)}>
                    <SelectTrigger className="h-14 text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high" className="text-lg py-3">
                        🔴 High Priority
                      </SelectItem>
                      <SelectItem value="medium" className="text-lg py-3">
                        🟡 Medium Priority
                      </SelectItem>
                      <SelectItem value="low" className="text-lg py-3">
                        🟢 Low Priority
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 text-xl"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Task"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AddTask;
