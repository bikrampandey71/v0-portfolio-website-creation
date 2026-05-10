import { Award, Calendar } from "lucide-react"

const trainings = [
  {
    title: "Career Fair and Forum Volunteer",
    organization: "Asian Institute of Technology",
    year: "2023, 2024",
    description: "Collaborated with leading companies to create valuable networking and career opportunities for attendees at the AIT Career Fair and Forum."
  },
  {
    title: "Application of Satellite-based Soil Moisture Data Seminar",
    organization: "INCAP",
    year: "2024, 2025",
    description: "Attended comprehensive seminars on utilizing satellite-based soil moisture data for hydrological and agricultural applications."
  },
  {
    title: "AutoCAD and SketchUp Training Certification",
    organization: "Professional Training Institute",
    year: "2018",
    description: "Completed 40 hours of intensive training in AutoCAD 2D/3D modeling and SketchUp for engineering design applications."
  }
]

export function TrainingSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-primary font-semibold tracking-wider text-sm">TRAININGS & SEMINARS</h2>
        </div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {trainings.map((training, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 text-primary text-sm mb-3">
                <Calendar className="h-4 w-4" />
                <span>{training.year}</span>
              </div>
              <h3 className="text-foreground font-semibold mb-2">{training.title}</h3>
              <p className="text-primary text-sm mb-3">{training.organization}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
