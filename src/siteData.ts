export type NavItem = {
  label: string;
  href: string;
};

export const image = (name: string) => `/foodies-images/${name}`;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Find Us", href: "/#find-us" },
  { label: "Talk To Us", href: "/talk-to-us" }
];
