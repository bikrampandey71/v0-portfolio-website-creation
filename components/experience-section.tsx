import { Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "MAR 2026 — PRESENT",
    isCurrent: true,
    title: "Research Associate",
    company: "Asian Institute of Technology",
    location: "Thailand",
    description: "Satellite Gravimetry for Hydro-Resource Assessment in Southeast Asia - Utilizing GRACE/-FO satellite data integrated with hydrological-numerical modeling for groundwater monitoring and water resource management.",
    bullets: [
      "Monitoring Water Storage with GRACE/-FO: Integrating satellite gravimetry with hydrological-numerical modeling to provide robust insights into groundwater variability at the basin scale in regions with limited ground data",
      "Correcting for Earthquake Signals: Applying earthquake corrections to ensure groundwater monitoring reflects true hydrological processes rather than tectonic artifacts from events like the 2004 Andaman tsunami and 2012 Indian Ocean earthquake",
      "Downscaling for GRACE data: Refining GRACE/-FO's coarse resolution (~300 km) to ~10 km, capturing local variability for groundwater monitoring, drought assessment, and practical hydrological planning in Southeast Asia",
      "GRACE/-FO, Hydrological models, and GIS-Based Surface Water Analysis: Combining GRACE/-FO with hydrological models and precipitation datasets to separate groundwater from surface water, providing actionable insights for water security and basin-scale planning"
    ],
    skills: ["GRACE/-FO", "Satellite Gravimetry", "Hydrological Modeling", "GIS", "Python", "Downscaling"],
    link: "https://www.ait.ac.th/"
  },
  {
    period: "FEB 2025 — JUL 2025",
    isCurrent: false,
    title: "Research Assistant",
    company: "Asian Institute of Technology",
    location: "Thailand",
    description: "Develop flood forecasting and early warning systems for Northern Thailand by integrating physically based hydrological models with satellite-derived precipitation and hydrological data.",
    bullets: [
      "Utilize Python, Fortran, and Unix-based scripting to process large-scale hydrological data and automate model workflows",
      "Lead and organize technical meetings, consultations, and inter-institutional collaborations",
      "Prepare technical reports and contribute to innovative research development"
    ],
    skills: ["Python", "Fortran", "Unix", "RRI Model", "Data Assimilation"],
    link: "https://www.ait.ac.th/"
  },
  {
    period: "AUG 2022 — DEC 2023",
    isCurrent: false,
    title: "Project Engineer",
    company: "Appolo Hydropower Limited",
    location: "Nepal",
    description: "Led civil works supervision and construction execution for the Buku Khola Hydropower Project (6 MW), Okhaldhunga, Nepal.",
    bullets: [
      "Ensured quality control and met project timelines for hydropower construction",
      "Spearheaded tender and contract document preparation, optimizing project strategy and compliance"
    ],
    skills: ["Project Management", "Civil Engineering", "Hydropower", "Quality Control", "Contract Management"],
    link: null
  },
  {
    period: "MAR 2020 — AUG 2022",
    isCurrent: false,
    title: "Civil Hydro Engineer",
    company: "Swachchha Urja Bikas Pvt Ltd",
    location: "Nepal",
    description: "Contributed to design and drafting for Chepe Khola and Liping Khola hydropower projects.",
    bullets: [
      "Ensured accuracy in project layout and structural planning",
      "Conducted field visits to assess penstock alignment and headworks structure",
      "Developed comprehensive project reports with findings and recommendations for improvements"
    ],
    skills: ["AutoCAD", "Structural Design", "Hydrology", "Field Assessment", "Technical Reporting"],
    link: null
  },
  {
    period: "APR 2019 — JUN 2019",
    isCurrent: false,
    title: "Intern Civil Engineer",
    company: "Sahas Urja Limited",
    location: "Nepal",
    description: "Involved in Solu Khola (Dudh-Koshi) Hydro Electric Project - 86 MW as an intern civil engineer.",
    bullets: [
      "Exposed to site supervision of headworks, audit portals preparation and tunnel excavation with supports",
      "Prepared bill of quantity of headworks with skills like geological 3D modelling of tunnel in AutoCAD 3D Modelling"
    ],
    skills: ["AutoCAD 3D", "Site Supervision", "Tunnel Engineering", "Bill of Quantities"],
    link: null
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              {/* Left Column - Date */}
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground text-sm">{exp.period}</span>
                {exp.isCurrent && (
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full w-fit font-medium">
                    Current
                  </span>
                )}
              </div>

              {/* Right Column - Content */}
              <div className="bg-card border border-border rounded-xl p-6 relative group">
                {/* External Link */}
                {exp.link && (
                  <Link 
                    href={exp.link} 
                    target="_blank" 
                    className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${exp.company}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 border border-primary/50 text-primary rounded-full text-xs font-medium"
                    >
                      {skill}
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
