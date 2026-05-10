import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-foreground font-semibold text-xl">Bikram</span>
              <span className="text-primary italic font-serif text-xl">Pandey</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Water Resources Engineer & Hydrologist specializing in hydrological modeling, 
              flood forecasting, and water resource systems.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.linkedin.com/in/bikram-pandey-a2b54b1a2/" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/bikrampandey71" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:bikrampandey71@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Experience
              </Link>
              <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Education
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:bikrampandey71@gmail.com" className="hover:text-primary transition-colors">
                  bikrampandey71@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+66 0964184196</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Klong Luang, Pathum Thani, Thailand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Bikram Pandey. Built with <Heart className="h-4 w-4 text-primary" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
