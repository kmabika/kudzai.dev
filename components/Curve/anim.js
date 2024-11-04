export const curve = (initialPath, targetPath) => {
    return {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: { duration: 1.25, delay: 0.25, ease: [0.76, 0, 0.24, 1] },
      },
    }
  }
  
  export const translate = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 1.25, delay: 0.25, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
  }