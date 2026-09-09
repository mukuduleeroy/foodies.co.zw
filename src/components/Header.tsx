import React from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { image, navItems } from "../siteData";

export function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
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
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button className="icon-button close-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button primary" to="/menu" onClick={() => setOpen(false)}>
            <ShoppingBag size={18} />
            Order now
          </Link>
        </div>
      )}
    </header>
  );
}
