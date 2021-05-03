export const landingSlideVariants = {
  initial: {
    y: '-50%',
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1, ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96]
  },
  }
}

export const containerSlideVaiants = {
  initial: {
    x: '100%'
  },
  animate: {
    x: 0,
    transition: {duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  },
  exit: {
    x: '-100%',
    transition: { east: 'eastInOut' }
  },
}

export const footerVariants = {
  initial: {
    y: 200
  },
  animate: {
    y: 0,
    transition: { duration: 1, delay: 0.5 }
  }
}

export const buttonVariants = {
  initial: {
    x: '100vw'
  },
  animate: {
    x: 0,
    transition: {
      duration: 1
    }
  }
}