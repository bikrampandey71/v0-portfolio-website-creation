import { Code2, Wrench, Globe, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Hydrological & Modeling Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "RRI Model", level: 95 },
      { name: "GRACE/-FO Analysis", level: 90 },
      { name: "Satellite Gravimetry", level: 85 },
      { name: "Flood Forecasting", level: 90 },
      { name: "Data Assimilation", level: 85 },
      { name: "Watershed Modeling", level: 90 }
    ]
  },
  {
    title: "GIS & Spatial Analysis",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: "ArcGIS", level: 90 },
      { name: "QGIS", level: 90 },
      { name: "Remote Sensing", level: 85 },
      { name: "Geospatial Analysis", level: 85 }
    ]
  },
  {
    title: "Programming & Scripting",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Fortran", level: 80 },
      { name: "Unix/Linux", level: 85 },
      { name: "MATLAB", level: 75 }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Artificial Neural Networks (ANN)", level: 80 },
      { name: "LSTM Networks", level: 75 },
      { name: "Data Processing", level: 85 },
      { name: "Statistical Analysis", level: 85 }
    ]
  }
]

const tools = [
  "AutoCAD 2D/3D",
  "SketchUp",
  "Microsoft Office",
  "Adobe Acrobat",
  "Git/GitHub"
]

const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
  { name: "Spanish", level: "Basic" }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">SKILLS & EXPERTISE</h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-foreground font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground text-sm">{skill.name}</span>
                      <span className="text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-semibold mb-4">Design & Productivity Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-primary/50 text-primary rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-semibold mb-4">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{lang.name}</span>
                  <span className="text-primary text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
