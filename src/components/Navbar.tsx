import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Zap, User, BarChart3, MapPin, Target, Users } from "lucide-react";
import skillSyncLogo from "@/assets/skillsync-logo.png";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.dashboard"), path: "/dashboard", icon: BarChart3 },
    { name: t("nav.quiz"), path: "/quiz", icon: Brain },
    { name: t("nav.roadmap"), path: "/roadmap", icon: MapPin },
    { name: t("nav.recommendations"), path: "/recommendations", icon: Target },
    { name: t("nav.vlogs"), path: "/vlogs", icon: Zap },
    { name: "Mentor Portal", path: "/volunteer-portal", icon: Users },
    { name: t("nav.profile"), path: "/profile", icon: User },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - always left */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={skillSyncLogo}
              alt="SkillSync"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-extrabold gradient-text hidden sm:block tracking-tight">
              SkillSync
            </span>
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 rounded-full transition-transform duration-300 ${
                      isActivePath(item.path)
                        ? "bg-gradient-to-r from-primary to-purple-500 scale-x-100"
                        : "bg-gradient-to-r from-primary to-purple-500 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSelector />
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground rounded-xl"
              >
                {t("nav.login")}
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="rounded-xl bg-gradient-primary hover:opacity-90 px-5 shadow-md">
                {t("nav.signup")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground rounded-xl"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg shadow-lg">
          <div className="px-3 pt-3 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "bg-gradient-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-3 space-y-2">
              <LanguageSelector />
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full rounded-xl border-primary/30 hover:bg-primary/10">
                  {t("nav.login")}
                </Button>
              </Link>
              <Link to="/signup" className="block">
                <Button className="w-full rounded-xl bg-gradient-primary hover:opacity-90 shadow-md">
                  <Zap className="h-4 w-4 mr-2" />
                  {t("nav.signup")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
