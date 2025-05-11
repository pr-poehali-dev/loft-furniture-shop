import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", href: "#" },
    { name: "Каталог", href: "#categories" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-loft-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-white font-heading tracking-tighter">
              ТОМ<span className="text-loft-green">ЛОФТ</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-loft-green transition-colors duration-200 animated-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:89819474096"
              className="hidden md:flex items-center text-white hover:text-loft-green transition-colors duration-200"
            >
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              <span className="text-sm">8 (981) 947-40-96</span>
            </a>

            <Button className="bg-loft-green hover:bg-loft-green/90 text-white rounded-sm hidden md:flex">
              Каталог
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  <Icon name="Menu" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-loft-black text-white">
                <div className="py-6">
                  <div className="mb-6 text-xl font-bold font-heading">
                    ТОМ<span className="text-loft-green">ЛОФТ</span>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="py-2 text-lg font-medium hover:text-loft-green transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ))}
                    <a
                      href="tel:89819474096"
                      className="py-2 flex items-center text-white hover:text-loft-green"
                    >
                      <Icon name="Phone" className="mr-2 h-4 w-4" />
                      <span>8 (981) 947-40-96</span>
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
