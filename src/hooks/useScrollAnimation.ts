import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number // 0-1, how much of element should be visible to trigger
  delay?: number // delay in ms before animation starts
  once?: boolean // if true, animation only happens once
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    delay = 0,
    once = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const currentElement = elementRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          
          // If animation should only happen once, disconnect observer
          if (once && currentElement) {
            observer.unobserve(currentElement)
          }
        } else if (!once) {
          // If animation can repeat, reset when element leaves viewport
          setIsVisible(false)
        }
      },
      {
        threshold,
      }
    )

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay, once])

  return { ref: elementRef, isVisible }
}

// Preset animation classes you can use
export const animationPresets = {
  slideUp: {
    initial: "translate-y-20 opacity-0",
    animate: "translate-y-0 opacity-100",
    transition: "transition-all duration-1000 ease-out"
  },
  slideDown: {
    initial: "-translate-y-20 opacity-0",
    animate: "translate-y-0 opacity-100",
    transition: "transition-all duration-1000 ease-out"
  },
  slideLeft: {
    initial: "translate-x-20 opacity-0",
    animate: "translate-x-0 opacity-100",
    transition: "transition-all duration-1000 ease-out"
  },
  slideRight: {
    initial: "-translate-x-20 opacity-0",
    animate: "translate-x-0 opacity-100",
    transition: "transition-all duration-1000 ease-out"
  },
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-1000 ease-out"
  },
  scaleUp: {
    initial: "scale-95 opacity-0",
    animate: "scale-100 opacity-100",
    transition: "transition-all duration-700 ease-out"
  },
  fadeInUp: {
    initial: "translate-y-10 opacity-0",
    animate: "translate-y-0 opacity-100",
    transition: "transition-all duration-700 ease-out"
  }
}
