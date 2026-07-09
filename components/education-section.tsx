import { GraduationCap, ExternalLink } from "lucide-react"
import Link from "next/link"

const education = [
  {
    period: "JAN 2024 — JAN 2026",
    degree: "Master of Engineering",
    field: "Water Engineering and Management",
    institution: "Asian Institute of Technology",
    location: "Klong Luang, Thailand",
    thesis: "Advancing Flood Forecasting for Northern Thailand using Rainfall-Runoff-Inundation model and Data Assimilation Technique",
    supervisor: "Dr. Natthachet Tangdamrongsub",
    modules: [
      "Watershed Hydrology and Modelling of Water Resource Systems",
      "Groundwater Development and Management",
      "Water Resource Systems",
      "Hydro Informatics and Modern Hydrological Modelling",
      "AI and Big Data in Water"
    ],
    link: "https://www.ait.ac.th/"
  },
  {
    period: "AUG 2015 — AUG 2019",
    degree: "Bachelor of Engineering",
    field: "Civil Engineering (Specialization in Hydropower)",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    thesis: "Potential Study of Solu Khola (Dudh Koshi) Hydroelectric Project",
    supervisor: null,
    modules: [
      "Engineering Hydrology",
      "Fluid Mechanics",
      "Hydraulic and River Engineering",
      "Hydraulic Structure and Machines",
      "Hydropower Engineering",
      "Structural Analysis",
      "Transportation Engineering"
    ],
    link: "https://ku.edu.np/"
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">EDUCATION</h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5 relative group">
              {/* External Link */}
              {edu.link && (
                <Link 
                  href={edu.link} 
                  target="_blank" 
                  className="absolute top-5 right-5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visit ${edu.institution}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}

              <span className="text-muted-foreground text-sm">{edu.period}</span>
              
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-1">{edu.field}</p>
              <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
              <p className="text-muted-foreground text-sm mb-4">{edu.location}</p>

              {/* Thesis */}
              <div className="mb-4">
                <h4 className="text-foreground font-medium text-sm mb-1">Thesis</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.thesis}</p>
                {edu.supervisor && (
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-primary">Supervisor:</span> {edu.supervisor}
                  </p>
                )}
              </div>

              {/* Modules */}
              <div>
                <h4 className="text-foreground font-medium text-sm mb-2">Key Modules</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.modules.map((module, moduleIndex) => (
                    <span 
                      key={moduleIndex}
                      className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
