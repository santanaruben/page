import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Blockchain Student",
    company: "UCAB",
    content:
      "Ruben's teaching methodology made complex Solidity concepts accessible. His real-world examples and hands-on approach helped me understand blockchain development deeply.",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Web3 Developer",
    company: "ETH Venezuela",
    content:
      "Working with Ruben in the Ethereum Venezuela community has been incredible. His technical expertise and leadership have been instrumental in growing our developer ecosystem.",
    avatar: "/professional-man.png",
    rating: 5,
  },
  {
    name: "Ana Silva",
    role: "Computer Science Student",
    company: "UPTA",
    content:
      "Professor Santana's classes are always engaging and practical. He bridges the gap between academic theory and industry practice perfectly.",
    avatar: "/student-woman.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">What People Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feedback from students, colleagues, and community members I've had the pleasure to work with.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
