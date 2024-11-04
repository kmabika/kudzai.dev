"use client"
import Curve from "@/components/Curve"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Curve>
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
            <h1 className="mt-8 text-2xl leading-10 font-serif subpixel-antialiased opacity-90">
              Hello. I'm Kudzai.{" "}
            </h1>
            <p className="mt-5 leading-7">
			     I'm a software engineer focused on enterprise saas solutions.
            </p>
          </main>
        </motion.div>
      </div>
    </Curve>
  )
}