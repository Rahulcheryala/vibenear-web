import CardNav from './Bits/CardNav'

const Navbar = () => {
  const items = [
    {
      label: "Discover",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "How it Works", ariaLabel: "How VibeNear Works", href: "#how-it-works" },
        { label: "Why Us", ariaLabel: "Why Choose VibeNear", href: "#why-vibe-near" },
        { label: "Our Apps", ariaLabel: "VibeNear Mobile Apps", href: "#our-apps" }
      ]
    },
    {
      label: "For You",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "For Businesses", ariaLabel: "Business Solutions", href: "#for-businesses" },
        { label: "For Students", ariaLabel: "Student Communities", href: "#for-students" },
        { label: "Join Waitlist", ariaLabel: "Join VibeNear Waitlist", href: "#join-waitlist" }
      ]
    },
    {
      label: "Support",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "FAQs", ariaLabel: "Frequently Asked Questions", href: "#faqs" },
        { label: "Contact Us", ariaLabel: "Contact VibeNear", href: "mailto:support@vibenear.com" },
        { label: "Support", ariaLabel: "Support", href: "/support" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/images/logo/Logo.svg"
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
