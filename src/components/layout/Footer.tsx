import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../../data/content';

const { nav, footer } = siteContent;

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-base font-semibold text-text-primary block mb-3 tracking-tight">
              {nav.logo}
            </span>
            <p className="text-sm text-text-secondary leading-relaxed">
              {footer.tagline}
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={footer.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a
                href={footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] block mb-4">
              Navegacao
            </span>
            <ul className="space-y-2.5">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] block mb-4">
              Contato
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href={footer.contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {footer.contact.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={footer.contact.email.href}
                  className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  <Mail size={14} strokeWidth={1.5} />
                  {footer.contact.email.label}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-secondary">
                <MapPin size={14} strokeWidth={1.5} />
                {footer.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-text-muted">
            {new Date().getFullYear()} Pedro Brasca
          </p>
        </div>
      </div>
    </footer>
  );
}
