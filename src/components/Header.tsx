import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { LogOut, Calendar, History, Users } from "lucide-react";

interface HeaderProps {
  userRole?: "elderly" | "caregiver";
  userName?: string;
  onLogout?: () => void;
}

const Header = ({ userRole, userName, onLogout }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">💙</div>
            <div>
              <h1 className="text-3xl font-bold text-primary">SeniorServe</h1>
              {userName && (
                <p className="text-lg text-muted-foreground">Welcome, {userName}</p>
              )}
            </div>
          </div>

          {userRole && (
            <nav className="flex items-center gap-4">
              <Button
                variant={location.pathname === "/dashboard" ? "default" : "ghost"}
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="gap-2"
              >
                <Calendar className="h-6 w-6" />
                Today's Tasks
              </Button>
              
              <Button
                variant={location.pathname === "/history" ? "default" : "ghost"}
                size="lg"
                onClick={() => navigate("/history")}
                className="gap-2"
              >
                <History className="h-6 w-6" />
                History
              </Button>

              {userRole === "caregiver" && (
                <Button
                  variant={location.pathname === "/caregiver" ? "default" : "ghost"}
                  size="lg"
                  onClick={() => navigate("/caregiver")}
                  className="gap-2"
                >
                  <Users className="h-6 w-6" />
                  Care View
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-6 w-6" />
                Logout
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
