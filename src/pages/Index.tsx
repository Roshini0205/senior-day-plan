import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">💙</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            SeniorServe
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Simple daily task management designed especially for seniors and their caregivers
          </p>

          <div className="flex gap-6 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/login")}
              className="h-16 px-12 text-xl"
            >
              Login
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/signup")}
              className="h-16 px-12 text-xl"
            >
              Sign Up
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-10 pb-10">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-3">Daily Tasks</h3>
              <p className="text-lg text-muted-foreground">
                Manage medicine, appointments, and daily activities with ease
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-10 pb-10">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-3">Easy to Use</h3>
              <p className="text-lg text-muted-foreground">
                Large buttons and clear text designed for comfort and accessibility
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-10 pb-10">
              <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-3">Caregiver Support</h3>
              <p className="text-lg text-muted-foreground">
                Track progress and stay connected with loved ones
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
