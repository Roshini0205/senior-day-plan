import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your backend API call
    // Example:
    // const response = await fetch("http://localhost:5000/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password })
    // });

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login functionality",
        description: "Connect this form to your Node.js backend API",
      });
      setLoading(false);
      // After successful login, navigate to dashboard
      // navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-3 text-center">
          <div className="text-6xl mb-4">💙</div>
          <CardTitle className="text-4xl">Welcome to SeniorServe</CardTitle>
          <CardDescription className="text-xl">
            Login to manage your daily tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-xl">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 text-lg"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-xl">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-14 text-lg"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-16 text-xl"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Don't have an account?{" "}
                <Button
                  type="button"
                  variant="link"
                  className="text-xl p-0 h-auto"
                  onClick={() => navigate("/signup")}
                >
                  Sign up here
                </Button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
