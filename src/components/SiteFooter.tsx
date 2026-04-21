import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import pixelLogo from "@/assets/pixel-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white/95 inline-block rounded-md p-2">
            <img src={logo} alt="Bizwise" className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Bizwise Consultants — expert financial, taxation and business consulting tailored for
            SMEs and growing businesses in Pakistan.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-brand transition-smooth">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand transition-smooth">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand transition-smooth">
                Services
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-brand transition-smooth">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/trainings" className="hover:text-brand transition-smooth">
                Trainings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Accounting Services</li>
            <li>Taxation Services</li>
            <li>Financial Management</li>
            <li>Decision Support</li>
            <li>Legal & Secretarial</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" /> Karachi, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand shrink-0" /> +92 317 2138835
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand shrink-0" /> info@bizwiseconsultants.com
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="rounded-full bg-white/10 p-2 hover:bg-brand transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col items-center justify-center gap-3 text-xs text-primary-foreground/70 text-center">
          <p>© {new Date().getFullYear()} Bizwise Consultants. All rights reserved.</p>
          <a
            href="https://pixelwebdevelopers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-smooth hover:text-white"
          >
            <span>Developed by</span>
            <img
              src={pixelLogo}
              alt="Pixel Web Developers Logo"
              className="h-5 w-auto opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
            />
            <span className="text-brand font-bold group-hover:underline">Pixel Web Developers</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
