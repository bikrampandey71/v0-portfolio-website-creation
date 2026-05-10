import { FolderOpen, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Advanced Flood Forecasting System for Northern Thailand",
    year: "2024-2025",
    description: "Developed a comprehensive flood forecasting and early warning system using the RRI (Rainfall-Runoff-Inundation) model integrated with data assimilation techniques. The system processes satellite-derived precipitation data and hydrological observations to provide accurate flood predictions for Northern Thailand.",
    highlights: [
      "Implemented data assimilation techniques to improve forecast accuracy",
      "Integrated satellite-derived precipitation data with ground observations",
      "Developed automated workflows using Python and Fortran",
      "Created real-time forecasting capabilities for early warning systems"
    ],
    technologies: ["Python", "Fortran", "RRI Model", "Data Assimilation", "GIS", "Remote Sensing"],
    github: "https://github.com/bikrampandey71"
  },
  {
    title: "GRACE/-FO Satellite Gravimetry for Groundwater Monitoring",
    year: "2026-Present",
    description: "Research project utilizing GRACE/-FO satellite data integrated with hydrological-numerical modeling for groundwater monitoring and water resource management in Southeast Asia. Includes downscaling techniques to refine resolution from ~300 km to ~10 km for practical applications.",
    highlights: [
      "Developed downscaling algorithms for GRACE/-FO data",
      "Applied earthquake corrections for accurate hydrological signal detection",
      "Combined satellite data with hydrological models for basin-scale planning",
      "Created GIS-based surface water analysis tools"
    ],
    technologies: ["GRACE/-FO", "Python", "Satellite Gravimetry", "Hydrological Modeling", "GIS"],
    github: null
  },
  {
    title: "Solu Khola (Dudh Koshi) Hydroelectric Project Study",
    year: "2019",
    description: "Potential study for the 86 MW Solu Khola (Dudh-Koshi) Hydroelectric Project in Nepal. Conducted comprehensive analysis including site assessment, geological 3D modeling, and bill of quantities preparation for headworks construction.",
    highlights: [
      "Performed geological 3D modeling of tunnel alignment",
      "Prepared detailed bill of quantities for headworks",
      "Conducted field surveys and site assessments",
      "Developed technical documentation and project reports"
    ],
    technologies: ["AutoCAD 3D", "Site Survey", "Geological Modeling", "Technical Documentation"],
    github: null
  },
  {
    title: "De-sanding Basin with Sediment Flushing System",
    year: "2018",
    description: "Design and construction of a working model demonstrating de-sanding basin principles with an integrated sediment flushing system for hydropower applications.",
    highlights: [
      "Designed and built functional scale model",
      "Demonstrated sediment removal efficiency",
      "Applied hydraulic engineering principles",
      "Presented findings for academic evaluation"
    ],
    technologies: ["Hydraulic Engineering", "Physical Modeling", "Sediment Transport"],
    github: null
  },
  {
    title: "Panauti Hydropower Plant Rehabilitation Study",
    year: "2018",
    description: "Analysis and recommendations for the rehabilitation, upgrading, and modernization of the historic Panauti Hydropower Plant (2.4 MW) in Nepal.",
    highlights: [
      "Assessed current plant condition and efficiency",
      "Proposed modernization strategies",
      "Evaluated economic feasibility of upgrades",
      "Developed technical improvement recommendations"
    ],
    technologies: ["Hydropower Engineering", "Technical Analysis", "Feasibility Study"],
    github: null
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <FolderOpen className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">PROJECTS & RESEARCH</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5 group hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-primary text-sm font-medium">{project.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Link 
                      href={project.github} 
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-muted-foreground rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
