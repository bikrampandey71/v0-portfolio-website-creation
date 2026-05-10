import { Code2, Wrench, Globe, Brain, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Hydrological & Modeling Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "RRI Model",
      "GRACE/-FO Analysis",
      "Satellite Gravimetry",
      "Flood Forecasting",
      "Data Assimilation",
      "Watershed Modeling",
      "HEC-RAS",
      "HEC-HMS"
    ]
  },
  {
    title: "GIS & Spatial Analysis",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      "ArcGIS",
      "QGIS",
      "Remote Sensing",
      "Geospatial Analysis",
      "Google Earth Engine",
      "Spatial Data Processing"
    ]
  },
  {
    title: "Programming & Scripting",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      "Python",
      "Fortran",
      "Unix/Linux",
      "MATLAB",
      "Shell Scripting",
      "Git/GitHub"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      "Artificial Neural Networks",
      "LSTM Networks",
      "Data Processing",
      "Statistical Analysis",
      "Time Series Forecasting"
    ]
  },
  {
    title: "Design & Engineering Tools",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      "AutoCAD 2D/3D",
      "SketchUp",
      "Microsoft Office",
      "Adobe Acrobat",
      "Technical Drawing"
    ]
  }
]

const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
  { name: "Spanish", level: "Basic" }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">SKILLS & EXPERTISE</h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-6 mb-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-foreground font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 border border-primary/50 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-foreground font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-foreground">{lang.name}</span>
                <span className="text-primary text-sm px-2 py-0.5 bg-primary/10 rounded">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
