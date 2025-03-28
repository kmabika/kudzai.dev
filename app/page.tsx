"use client"
import ClipCurve from "@/components/Curve"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.75,
          duration: 0.75,
          ease: [0.17, 0.84, 0.44, 1],
        }}
        className="fixed inset-x-0 top-0 bottom-0 overflow-auto"
      >
        <main className="relative max-w-[36rem] flex flex-col mx-auto pt-16 pb-12 sm:pt-24 sm:pb-24 px-8 sm:px-0">
          <h1 className="mt-8 text-2xl leading-6 font-serif subpixel-antialiased opacity-90">
            Kudzai Mabika.
          </h1>
          <p className="mt-1 leading-7">
            jhb
          </p>

          <p className="mt-4 text-sm">
            I'm a indie developer passionate about user interfaces and generative AI. Exploring design and crafting thoughtful interactions. Obsessed with the small details, while mastering the web one step at a time.

            Building scira.ai — A minimalistic AI-powered search engine that helps you find information of the internet. Scira is currently sponsored by Vercel and xAI.
          </p>

          <h2 className="text-sm mt-8">
            work
          </h2>
          <p className="text-sm">
            Interactive experiments and projects exploring the intersection of design and technology.
          </p>
        </main>
      </motion.div>
    </div>
  )
}
