import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/vrund567", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/Vrund807", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/i_vrund/", label: "Instagram" },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center gap-4 mb-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Vrund Mehta. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
