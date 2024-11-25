import HomeIcon from "../../assets/HomeIcon";


const mainMenuSection = [
  {
    href: "/home",
    icon: HomeIcon,
    title: "home",
  },
  {
    href: "/accounts",
    icon: HomeIcon,
    title: "accounts",
  },
];

const seconMenuSection = [
  {
    href: "/settings",
    icon: HomeIcon,
    title: "settings",
  },
];

const navItemsDefault = [
  {
    title: "Banking",
    pages: mainMenuSection,
  },
  {
    title: "Others",
    pages: seconMenuSection,
  },
];

export default navItemsDefault;
