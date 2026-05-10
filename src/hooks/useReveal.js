import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function useReveal(margin = '-50px') {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin })
  return { ref, inView }
}
