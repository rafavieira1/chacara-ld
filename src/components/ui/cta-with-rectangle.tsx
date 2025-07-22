import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
    variant?: "default" | "link" | "secondary" | "destructive" | "outline" | "ghost"
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("", className)}>
      <div className="text-center">
        <div className="rounded-lg p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 relative group max-w-4xl mx-auto bg-white/80 backdrop-blur-sm">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
            <Calendar className="w-10 h-10 text-white" />
          </div>

          {/* Badge */}
          {badge && (
            <Badge 
              variant="outline" 
              className="mb-4 bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] text-white border-0"
            >
              {badge.text}
            </Badge>
          )}

          {/* Title */}
          <h3 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Action Button */}
          <button className="px-12 py-4 rounded-full font-medium tracking-wide transition-all duration-500 group text-lg bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] text-white hover:from-[#4A2F22] hover:to-[#6B4A3F] hover:shadow-2xl">
            <span className="group-hover:tracking-wider transition-all duration-300">
              {action.text}
            </span>
          </button>

          {/* Glow Effect */}
          {withGlow && (
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          )}
        </div>
      </div>
    </section>
  )
}
