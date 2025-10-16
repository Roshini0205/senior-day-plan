import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"elderly" | "caregiver">("elderly");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your backend API call
    // Example:
    // const response = await fetch("http://localhost:5000/api/auth/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password, role })
    // });

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Signup functionality",
        description: "Connect this form to your Node.js backend API",
      });
      setLoading(false);
      // After successful signup, navigate to login
      // navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-3 text-center">
          <div className="text-6xl mb-4">💙</div>
          <CardTitle className="text-4xl">Join SeniorServe</CardTitle>
          <CardDescription className="text-xl">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-xl">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-14 text-lg"
              />
            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-14 text-lg"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-xl">I am a:</Label>
              <RadioGroup value={role} onValueChange={(value) => setRole(value as "elderly" | "caregiver")}>
                <div className="flex items-center space-x-3 bg-muted p-4 rounded-lg">
                  <RadioGroupItem value="elderly" id="elderly" className="h-6 w-6" />
                  <Label htmlFor="elderly" className="text-lg cursor-pointer flex-1">
                    Senior User (I need help with tasks)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-muted p-4 rounded-lg">
                  <RadioGroupItem value="caregiver" id="caregiver" className="h-6 w-6" />
                  <Label htmlFor="caregiver" className="text-lg cursor-pointer flex-1">
                    Caregiver (I help others with tasks)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-16 text-xl"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Button>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Already have an account?{" "}
                <Button
                  type="button"
                  variant="link"
                  className="text-xl p-0 h-auto"
                  onClick={() => navigate("/login")}
                >
                  Login here
                </Button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
