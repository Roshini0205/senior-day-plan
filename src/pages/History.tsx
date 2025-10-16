import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

// Mock history data - replace with your API calls
const mockHistory = [
  // Empty by default
];

const History = () => {
  const navigate = useNavigate();
  const [history] = useState(mockHistory);

  // TODO: Fetch history from your backend
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/tasks/history")
  //     .then(res => res.json())
  //     .then(data => setHistory(data));
  // }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        userRole="elderly"
        userName="John"
        onLogout={() => navigate("/login")}
      />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Task History</h2>

          {history.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-lg border-2 border-dashed border-border">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-3xl font-semibold mb-3">No history yet</h3>
              <p className="text-xl text-muted-foreground">
                Complete tasks to see your history here
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {history.map((item: any) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{item.taskName}</h3>
                        <p className="text-lg text-muted-foreground">{item.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.completed ? (
                          <div className="flex items-center gap-2 text-success">
                            <CheckCircle2 className="h-8 w-8" />
                            <span className="text-xl font-semibold">Completed</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-destructive">
                            <XCircle className="h-8 w-8" />
                            <span className="text-xl font-semibold">Missed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;
