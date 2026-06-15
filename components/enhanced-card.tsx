"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "@/components/locale-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  name: string
  description: string
  type: string
  image?: string
  link?: string
  repo?: string
  tags: string[]
}

interface EnhancedCardProps {
  project: Project
  featured?: boolean
}

export function EnhancedCard({ project, featured = false }: EnhancedCardProps) {
  const { t } = useLocale()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const translatedProject = t.projects?.items?.[String(project.id)]
  const name = translatedProject?.name ?? project.name
  const description = translatedProject?.description ?? project.description
  const type = translatedProject?.type ?? project.type

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-md hover:-translate-y-2 ${
        featured ? "ring-2 ring-emerald-200 dark:ring-emerald-800" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            } ${isHovered ? "scale-110" : "scale-100"}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Hover overlay with quick actions */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.link && (
              <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white hover:text-emerald-600 dark:bg-gray-800/90 dark:text-white dark:hover:bg-gray-800" asChild>
                <Link href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.repo && (
              <Button
                size="sm"
                variant="outline"
                className="bg-white/90 border-white/90 text-gray-900 hover:bg-white hover:text-emerald-600 dark:bg-gray-800/90 dark:border-gray-800/90 dark:text-white dark:hover:bg-gray-800"
                asChild
              >
                <Link href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className={`text-lg transition-colors duration-300 ${isHovered ? "text-emerald-600" : ""}`}>
            {name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`text-xs transition-all duration-300 ${
              featured ? "border-emerald-300 text-emerald-700 bg-emerald-50 dark:bg-emerald-950" : ""
            }`}
          >
            {type}
          </Badge>
        </div>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className={`text-xs transition-all duration-300 ${
                isHovered ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.link && (
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300" asChild>
              <Link href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                {t.card.liveSite}
              </Link>
            </Button>
          )}
          {project.repo && (
            <Button
              size="sm"
              variant="outline"
              className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                {t.card.code}
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
