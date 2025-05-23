"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { curve, translate } from "./anim"

const anim = (variants: { initial: { top: string } | { d: any }; enter: { top: string; transition: { duration: number; delay: number; ease: number[] }; transitionEnd: { top: string } } | { d: any; transition: { duration: number; delay: number; ease: number[] } } }) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
  }
}

type ClipCurveProps = {
  children: React.ReactNode
}
export default function ClipCurve({ children }: ClipCurveProps) {
  const [dimensions, setDimensions] = useState<{width: number | null, height: number | null}>({
    width: null,
    height: null,
  })

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth ?? 0,
        height: window.innerHeight ?? 0,
      })
    }
    resize()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      {dimensions.height != null && dimensions.width != null && <SVG height={dimensions.height} width={dimensions.width} />}
      {children}
    </div>
  )
}

const SVG = ({ height, width }: {height: number, width: number}) => {
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  )
}