import React from "react";
import { Link } from "react-router-dom";
import { Home, MapPin, Menu, MessageCircle, Search, ShoppingBag, Utensils, X } from "lucide-react";
import { image, navItems } from "../siteData";

const mobileNavIcons = [Home, Utensils, MapPin, MessageCircle];

export function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Foodies home">
          <img src={image("foodies logo.png")} alt="" />
          <span>Foodies</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-search desktop-action" to="/search" aria-label="Search the Foodies menu">
          <Search size={22} />
        </Link>
        <Link className="mission-link desktop-action" to="/menu">
          <ShoppingBag size={18} />
          Order Us
        </Link>
        <button className="icon-button mobile-trigger" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div className="mobile-menu-card">
            <div className="mobile-menu-profile">
              <button className="mobile-close-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
              <img src={image("logo symbol.jpg")} alt="" />
              <span>Good food, big flavour.</span>
            </div>

            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              <span>Menu</span>
              {navItems.map((item, index) => {
                const Icon = mobileNavIcons[index] ?? Utensils;

                return (
                  <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
                    <Icon size={20} aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-menu-actions">
              <Link to="/search" onClick={() => setOpen(false)}>
                <Search size={18} aria-hidden="true" />
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
