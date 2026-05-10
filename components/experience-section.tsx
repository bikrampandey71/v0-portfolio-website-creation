import { Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "MAR 2026 — PRESENT",
    isCurrent: true,
    title: "Research Associate",
    company: "Asian Institute of Technology",
    location: "Thailand",
    description: "Leading cutting-edge research on Satellite Gravimetry for Hydro-Resource Assessment in Southeast Asia. Utilizing GRACE/-FO satellite data integrated with hydrological-numerical modeling for groundwater monitoring and water resource management across the Mekong River Basin and neighboring regions.",
    bullets: [
      "Monitoring Water Storage with GRACE/-FO: Integrating satellite gravimetry with hydrological-numerical modeling (PCR-GLOBWB, GLDAS) to provide robust insights into groundwater variability at the basin scale in regions with limited ground data, enabling better water resource management decisions",
      "Correcting for Earthquake Signals: Developing and applying advanced earthquake correction algorithms to ensure groundwater monitoring reflects true hydrological processes rather than tectonic artifacts from major seismic events like the 2004 Andaman tsunami and 2012 Indian Ocean earthquake",
      "Downscaling for GRACE data: Implementing machine learning-based downscaling techniques to refine GRACE/-FO's coarse resolution (~300 km) to ~10 km spatial resolution, capturing local variability essential for groundwater monitoring, drought assessment, and practical hydrological planning in Southeast Asia",
      "GRACE/-FO, Hydrological models, and GIS-Based Surface Water Analysis: Combining GRACE/-FO total water storage anomalies with hydrological models and precipitation datasets (GPM, CHIRPS) to separate groundwater from surface water components, providing actionable insights for water security and basin-scale planning"
    ],
    skills: ["GRACE/-FO", "Satellite Gravimetry", "Hydrological Modeling", "GIS", "Python", "Downscaling", "Machine Learning"],
    link: "https://www.ait.ac.th/"
  },
  {
    period: "FEB 2025 — JUL 2025",
    isCurrent: false,
    title: "Research Assistant",
    company: "Asian Institute of Technology",
    location: "Thailand",
    description: "Developed an advanced flood forecasting and early warning system for Northern Thailand's Ping River Basin by integrating the physically-based Rainfall-Runoff-Inundation (RRI) model with satellite-derived precipitation data (GSMaP, GPM-IMERG) and real-time hydrological observations through data assimilation techniques.",
    bullets: [
      "Implemented Python, Fortran, and Unix-based scripting workflows to process terabytes of hydrological data from multiple satellite sources, automate RRI model calibration and validation, and generate real-time flood forecasts with 24-72 hour lead times",
      "Led and organized bi-weekly technical meetings with the Thai Meteorological Department, Royal Irrigation Department, and Hydro-Informatics Institute, facilitating inter-institutional collaborations for operational flood warning system implementation",
      "Prepared comprehensive technical reports documenting methodology, validation results, and uncertainty analysis, contributing to peer-reviewed publications on data assimilation techniques for ungauged catchments"
    ],
    skills: ["Python", "Fortran", "Unix", "RRI Model", "Data Assimilation", "GSMaP", "Flood Forecasting"],
    link: "https://www.ait.ac.th/"
  },
  {
    period: "AUG 2022 — DEC 2023",
    isCurrent: false,
    title: "Project Engineer",
    company: "Appolo Hydropower Limited",
    location: "Okhaldhunga, Nepal",
    description: "Led comprehensive civil works supervision and construction execution for the Buku Khola Small Hydropower Project (6 MW) in the mountainous Okhaldhunga district of Eastern Nepal, managing a team of 25+ construction workers and coordinating with contractors, suppliers, and regulatory authorities.",
    bullets: [
      "Supervised all civil engineering components including headworks (Tyrolean weir intake), desilting basin, 2.8 km headrace canal, forebay tank, 450m penstock alignment, and powerhouse construction, ensuring compliance with design specifications and quality standards",
      "Spearheaded tender document preparation and contractor evaluation for major civil works packages totaling NPR 180+ million, optimizing project strategy through competitive bidding and ensuring contractual compliance with Nepal Electricity Authority requirements",
      "Implemented quality control protocols using survey-grade instruments and material testing, reducing construction defects by 30% and meeting project milestones within scheduled timeframes despite challenging terrain and monsoon conditions"
    ],
    skills: ["Project Management", "Civil Engineering", "Hydropower", "Quality Control", "Contract Management", "Site Supervision"],
    link: null
  },
  {
    period: "MAR 2020 — AUG 2022",
    isCurrent: false,
    title: "Civil Hydro Engineer",
    company: "Swachchha Urja Bikas Pvt Ltd",
    location: "Kathmandu, Nepal",
    description: "Contributed to detailed engineering design and project development for two run-of-river hydropower projects: Chepe Khola (25 MW) in Lamjung and Liping Khola (15 MW) in Taplejung, involving hydraulic design, structural analysis, and field investigations in challenging Himalayan terrain.",
    bullets: [
      "Prepared detailed engineering drawings and design calculations for hydraulic structures including intake weirs, desilting basins, and powerhouse layouts using AutoCAD 2D/3D, ensuring structural integrity and hydraulic efficiency",
      "Conducted extensive field visits for penstock alignment surveys using total station and GPS equipment, headworks site geological assessments, and hydrological monitoring station installations across project sites at elevations up to 2,500 meters",
      "Developed comprehensive Detailed Project Reports (DPRs) consolidating hydrological analysis, structural design, environmental impact assessment findings, and cost estimates, submitted to Nepal Electricity Authority for project licensing"
    ],
    skills: ["AutoCAD 2D/3D", "Structural Design", "Hydrology", "Field Survey", "Technical Reporting", "DPR Preparation"],
    link: null
  },
  {
    period: "APR 2019 — JUN 2019",
    isCurrent: false,
    title: "Intern Civil Engineer",
    company: "Sahas Urja Limited",
    location: "Solukhumbu, Nepal",
    description: "Gained hands-on construction experience at the prestigious Solu Khola (Dudh-Koshi) Hydroelectric Project (86 MW), Nepal's largest privately-owned hydropower project, working directly under senior engineers on critical underground and surface civil works.",
    bullets: [
      "Participated in daily site supervision activities for headworks construction including concrete placement monitoring, reinforcement inspection, and formwork quality checks, learning industry-standard construction practices for mega hydropower projects",
      "Assisted in tunnel excavation support documentation including geological mapping of tunnel faces, rock bolt installation records, and shotcrete application logs for the 4.2 km headrace tunnel using NATM (New Austrian Tunneling Method)",
      "Prepared detailed bill of quantities for headworks components and developed 3D geological models of tunnel sections using AutoCAD 3D, visualizing rock mass characteristics and support requirements for tunnel design optimization"
    ],
    skills: ["AutoCAD 3D", "Site Supervision", "Tunnel Engineering", "Bill of Quantities", "NATM", "Geological Mapping"],
    link: null
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-6">
              {/* Left Column - Date */}
              <div className="flex flex-col gap-1.5">
                <span className="text-muted-foreground text-sm">{exp.period}</span>
                {exp.isCurrent && (
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full w-fit font-medium">
                    Current
                  </span>
                )}
              </div>

              {/* Right Column - Content */}
              <div className="bg-card border border-border rounded-xl p-5 relative group">
                {/* External Link */}
                {exp.link && (
                  <Link 
                    href={exp.link} 
                    target="_blank" 
                    className="absolute top-5 right-5 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${exp.company}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}

                <h3 className="text-lg font-semibold text-foreground mb-0.5">{exp.title}</h3>
                <p className="text-primary font-medium mb-0.5">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.location}</p>

                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{exp.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2.5 py-1 border border-primary/50 text-primary rounded-full text-xs font-medium"
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
