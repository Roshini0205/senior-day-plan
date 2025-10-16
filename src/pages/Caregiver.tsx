import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock stats - replace with your API calls
const mockStats = {
  weeklyCompletion: 0,
  monthlyCompletion: 0,
  totalTasks: 0,
  completedTasks: 0,
};

const Caregiver = () => {
  const navigate = useNavigate();
  const [stats] = useState(mockStats);

  // TODO: Fetch caregiver stats from your backend
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/caregiver/stats")
  //     .then(res => res.json())
  //     .then(data => setStats(data));
  // }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        userRole="caregiver"
        userName="Sarah"
        onLogout={() => navigate("/login")}
      />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Care Dashboard</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={stats.weeklyCompletion} className="h-4" />
                  <p className="text-3xl font-bold text-center">
                    {stats.weeklyCompletion}%
                  </p>
                  <p className="text-lg text-center text-muted-foreground">
                    Tasks completed this week
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={stats.monthlyCompletion} className="h-4" />
                  <p className="text-3xl font-bold text-center">
                    {stats.monthlyCompletion}%
                  </p>
                  <p className="text-lg text-center text-muted-foreground">
                    Tasks completed this month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Overall Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary mb-2">
                    {stats.completedTasks}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Tasks Completed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary mb-2">
                    {stats.totalTasks}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Total Tasks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {stats.totalTasks === 0 && (
            <div className="text-center py-12 mt-8 bg-card rounded-lg border-2 border-dashed border-border">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-3xl font-semibold mb-3">No data yet</h3>
              <p className="text-xl text-muted-foreground">
                Statistics will appear once tasks are added and completed
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Caregiver;
