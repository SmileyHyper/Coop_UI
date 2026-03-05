import { Link, Outlet, useLocation } from 'react-router';
import { Moon, Sun, Menu, X, Home, Building2, Users, Newspaper, Info, Phone, Calculator, LogIn } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Layout() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products & Services', href: '/products', icon: Building2 },
    { name: 'Membership', href: '/membership', icon: Users },
    { name: "What's New", href: '/news', icon: Newspaper },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact Us', href: '/contact', icon: Phone },
    { name: 'Loan Calculator', href: '/calculator', icon: Calculator },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">CO-OP</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg ${
                    location.pathname === item.href
                      ? 'bg-primary text-white'
                      : 'hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">

              {/* LOGIN BUTTON */}
              <Button
                className="hidden sm:flex items-center gap-2"
                onClick={() => setIsLoginOpen(true)}
              >
                <LogIn className="w-4 h-4" />
                Login
              </Button>

              {/* THEME TOGGLE */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              )}

              {/* MOBILE MENU */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* MOBILE NAV */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-accent rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* LOGIN MODAL */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-xl shadow-lg w-full max-w-md relative">

            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute right-4 top-4"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold mb-4">Login</h2>

            <form className="space-y-4">

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 border p-2 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 border p-2 rounded-lg"
                  placeholder="Enter password"
                />
              </div>

              <Button className="w-full">
                Login
              </Button>

            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-primary text-white py-6 text-center">
        <p>© 2026 Community Cooperative. All rights reserved.</p>
      </footer>

    </div>
  );
}