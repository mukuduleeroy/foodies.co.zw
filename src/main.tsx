import React from "react";
import { createRoot } from "react-dom/client";
import { ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import "./styles.css";

type NavItem = {
  label: string;
  href: string;
};

type Category = {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  href: string;
};

type Product = {
  name: string;
  variant: string;
  price: string;
  badge?: string;
  image: string;
  alt: string;
};

const image = (name: string) => `/foodies-images/${name}`;

const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#menu" },
  { label: "About", href: "#specials" },
  { label: "Contact Us", href: "#contact" },
  { label: "Login", href: "#order" }
];

const categories: Category[] = [
  {
    title: "Loaded Meals",
    eyebrow: "Big plates",
    image: image("481775242_622314300768730_5303396974757636470_n.png"),
    alt: "A Foodies loaded meal served with sides",
    href: "#menu"
  },
  {
    title: "Street Combos",
    eyebrow: "Fast favorites",
    image: image("482316903_619842441015916_562066848451706096.png"),
    alt: "A Foodies street food combo with grilled meat and chips",
    href: "#menu"
  },
  {
    title: "Share Boxes",
    eyebrow: "For the table",
    image: image("482808553_624105437256283_2265515229945450239_n.png"),
    alt: "A generous Foodies sharing box",
    href: "#menu"
  },
  {
    title: "Sweet Finishes",
    eyebrow: "After the main",
    image: image("unnamed (2).webp"),
    alt: "A Foodies dessert item",
    href: "#menu"
  }
];

const products: Product[] = [
  {
    name: "Foodies Feast",
    variant: "Grilled protein, chips, salad and house sauce",
    price: "R89",
    badge: "Popular",
    image: image("481775242_622314300768730_5303396974757636470_n.png"),
    alt: "Foodies feast meal"
  },
  {
    name: "Street Box",
    variant: "Crispy bites, fries and two dipping sauces",
    price: "R74",
    image: image("482084844_623968770603283_859170947419355809_n.png"),
    alt: "Foodies street box"
  },
  {
    name: "Family Table",
    variant: "A loaded platter made to share",
    price: "R219",
    badge: "Share",
    image: image("482808553_624105437256283_2265515229945450239_n.png"),
    alt: "Foodies family table platter"
  },
  {
    name: "Saucy Stack",
    variant: "Layered burger-style meal with chips",
    price: "R69",
    image: image("unnamed.webp"),
    alt: "Foodies saucy stack meal"
  }
];

const showcaseCategories: Category[] = [
  {
    title: "Just Hotwings",
    eyebrow: "Crispy heat",
    image: image("481775242_622314300768730_5303396974757636470_n.png"),
    alt: "Saucy Foodies hotwings",
    href: "#specials"
  },
  {
    title: "Soulicious Specials",
    eyebrow: "Loaded value",
    image: image("482316903_619842441015916_562066848451706096.png"),
    alt: "Foodies loaded specials",
    href: "#specials"
  },
  {
    title: "Easy Bucks Menu",
    eyebrow: "Quick bites",
    image: image("482084844_623968770603283_859170947419355809_n.png"),
    alt: "Foodies quick menu item",
    href: "#specials"
  },
  {
    title: "Just Chick'n Burgers",
    eyebrow: "Stacked",
    image: image("unnamed.webp"),
    alt: "Foodies burger-style meal",
    href: "#specials"
  }
];

function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Foodies home">
        <img src={image("foodies logo.png")} alt="" />
        <span>Foodies</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-search desktop-action" href="#menu" aria-label="Search the Foodies menu">
        <Search size={22} />
      </a>
      <a className="mission-link desktop-action" href="#order">
        <ShoppingBag size={18} />
        Order Us
      </a>
      <button className="icon-button mobile-trigger" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Menu size={24} />
      </button>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button className="icon-button close-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button primary" href="#order" onClick={() => setOpen(false)}>
            <ShoppingBag size={18} />
            Order now
          </a>
        </div>
      )}
    </header>
  );
}

function Section2() {
  return (
    <section className="menu-showcase" id="menu" aria-labelledby="menu-showcase-title">
      <h2 id="menu-showcase-title" className="sr-only">
        Foodies menu categories
      </h2>
      <div className="menu-showcase-top" aria-hidden="true"></div>
      <div className="showcase-card-row" aria-label="Featured menu categories">
        {showcaseCategories.map((category) => (
          <a className="showcase-card" href={category.href} key={category.title}>
            <span className="showcase-card-title">
              {category.title === "Just Hotwings" && (
                <>
                  Just
                  <br />
                  Hotwings®
                </>
              )}
              {category.title === "Soulicious Specials" && (
                <>
                  Soulicious®
                  <br />
                  Specials
                </>
              )}
              {category.title === "Easy Bucks Menu" && (
                <>
                  Easy
                  <br />
                  Bucks® Menu
                </>
              )}
              {category.title === "Just Chick'n Burgers" && (
                <>
                  Just
                  <br />
                  Chick'n Burgers
                </>
              )}
            </span>
            <img src={category.image} alt={category.alt} />
          </a>
        ))}
      </div>
      <div className="menu-stage">
        <img className="stage-sauce" src={image("logo symbol.jpg")} alt="" />
        <a className="whole-menu-link" href="#specials">
          View our whole menu
          <ChevronRight aria-hidden="true" size={58} strokeWidth={4} />
        </a>
        <span className="stage-chillies" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <img className="stage-bottom-food stage-bottom-left" src={image("482808553_624105437256283_2265515229945450239_n.png")} alt="" />
        <img className="stage-bottom-food stage-bottom-right" src={image("unnamed (2).webp")} alt="" />
      </div>
    </section>
  );
}

function FollowSection() {
  return (
    <section className="follow-section" id="specials" aria-labelledby="follow-title">
      <img className="follow-food follow-food-left" src={image("482084844_623968770603283_859170947419355809_n.png")} alt="" />
      <img className="follow-food follow-food-right" src={image("482084844_623968770603283_859170947419355809_n.png")} alt="" />
      <div className="follow-content">
        <span className="follow-rule" aria-hidden="true"></span>
        <h2 id="follow-title">Follow Us</h2>
        <p>We'll show you the way</p>
        <div className="social-links" aria-label="Foodies social channels">
          <a className="social-link" href="#contact" aria-label="Foodies on Facebook">
            f
          </a>
          <a className="social-link" href="#contact" aria-label="Foodies on X">
            t
          </a>
          <a className="social-link social-link-video" href="#contact" aria-label="Foodies on YouTube">
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section className="final-section" id="find-us" aria-labelledby="find-title">
      <div className="map-hero">
        <div className="map-sheet" aria-hidden="true">
          <span className="map-route"></span>
          <span className="map-pin map-pin-one">F</span>
          <span className="map-pin map-pin-two">F</span>
          <span className="map-pin map-pin-three">F</span>
          <span className="map-pin map-pin-four">F</span>
        </div>
        <div className="find-copy">
          <span className="find-rule" aria-hidden="true"></span>
          <h2 id="find-title">Find Us</h2>
          <p>We're never far away</p>
        </div>
        <form className="store-search" aria-label="Search Foodies stores">
          <label className="sr-only" htmlFor="final-store-search">
            Search by suburb
          </label>
          <input id="final-store-search" type="text" minLength={5} placeholder="Search by suburb" />
          <button type="submit" aria-label="Search stores">
            <Search size={42} strokeWidth={3.5} />
          </button>
        </form>
      </div>
      <footer className="final-footer" id="contact">
        <span>© Foodies 2026</span>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contact">Privacy Policy</a>
        </nav>
        <div className="footer-social" aria-label="Follow Foodies">
          <span>Follow us</span>
          <a href="#contact" aria-label="Foodies on Facebook">f</a>
          <a href="#contact" aria-label="Foodies on X">t</a>
          <a href="#contact" aria-label="Foodies on YouTube">▶</a>
        </div>
      </footer>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="hero-content" aria-labelledby="hero-title">
            <p className="hero-kicker">with the Foodies Feast</p>
            <h1 id="hero-title"><span>Foodies</span></h1>
            <p className="hero-subtitle">Good food, big flavour, made to share.</p>
            <div className="hero-actions">
              <a className="hero-order button" href="#order"><ShoppingBag size={18} /> Order Now</a>
              <a className="hero-menu button" href="#menu">View Menu <ChevronRight size={18} /></a>
            </div>
          </div>
          <div className="hero-media" aria-label="Featured Foodies sharing meal">
            <span className="hero-seed hero-seed-one"></span>
            <span className="hero-seed hero-seed-two"></span>
            <span className="hero-seed hero-seed-three"></span>
            <span className="hero-drop hero-drop-one"></span>
            <span className="hero-drop hero-drop-two"></span>
            <span className="hero-drop hero-drop-three"></span>
            <img className="hero-main-food" src={image("burger-hero.png")} alt="Foodies crispy chicken bucket hero" />
          </div>
        </section>

        <Section2 />

        <FollowSection />

        <FinalSection />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
