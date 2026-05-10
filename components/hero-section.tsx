import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Link2, Flag, Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 relative">
                <Image
                  src="/images/bikram-profile.jpg"
                  alt="Bikram Pandey"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-center">
                <div className="font-bold text-lg">6+ Years</div>
                <div className="text-xs">Experience</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-semibold tracking-wider text-sm mb-4">
              WATER RESOURCE ENGINEER
            </p>
            <h1 className="mb-6">
              <span className="text-5xl md:text-7xl font-bold text-foreground block">Bikram</span>
              <span className="text-5xl md:text-7xl font-serif italic text-muted-foreground">Pandey</span>
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <span className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground">
                Civil Engineer
              </span>
              <span className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground">
                Water Resources
              </span>
              <span className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground">
                Hydropower
              </span>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Bikram Pandey is a water resources engineer and hydrologist specializing in hydrological modelling, 
              flood forecasting, and water resource systems. He holds a Master of Engineering degree in Water Engineering 
              and Management from the Asian Institute of Technology (completed December 2025), where his research focused 
              on advancing flood forecasting using the RRI model and data assimilation techniques. He has professional 
              experience in hydropower engineering projects in Nepal and research experience in hydrological data analysis, 
              modelling, and early warning systems. His technical expertise includes GIS, hydrological modelling, and 
              programming tools such as Python and Fortran.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                <Link href="mailto:bikrampandey71@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-border hover:bg-secondary">
                <Link href="https://www.linkedin.com/in/bikram-pandey-a2b54b1a2/" target="_blank">
                  <Link2 className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-border hover:bg-secondary">
                <Link href="/Bikram_Pandey_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-primary font-semibold tracking-wider text-sm mb-6">
              CONTACT DETAILS
            </h3>
            <div className="space-y-4">
              <ContactItem 
                icon={<Mail className="h-5 w-5" />} 
                text="bikrampandey71@gmail.com" 
                href="mailto:bikrampandey71@gmail.com"
              />
              <ContactItem 
                icon={<Phone className="h-5 w-5" />} 
                text="+66 0964184196" 
              />
              <ContactItem 
                icon={<MapPin className="h-5 w-5" />} 
                text="Klong Luang, Pathum Thani, Thailand" 
              />
              <ContactItem 
                icon={<Linkedin className="h-5 w-5" />} 
                text="linkedin.com/in/bikram-pandey" 
                href="https://www.linkedin.com/in/bikram-pandey-a2b54b1a2/"
              />
              <ContactItem 
                icon={<Github className="h-5 w-5" />} 
                text="github.com/bikrampandey71" 
                href="https://github.com/bikrampandey71"
              />
              <ContactItem 
                icon={<Flag className="h-5 w-5" />} 
                text="Nepalese Nationality" 
                badge="NP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ 
  icon, 
  text, 
  href, 
  badge 
}: { 
  icon: React.ReactNode
  text: string
  href?: string
  badge?: string
}) {
  const content = (
    <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
      <span className="text-primary">{badge ? <span className="text-xs font-bold border border-primary rounded px-1">{badge}</span> : icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" className="block">
        {content}
      </Link>
    )
  }

  return content
}
