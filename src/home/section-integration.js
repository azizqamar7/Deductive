import gsap from 'gsap'

export const sectionIntegration = () => {
  let endMarker = 'bottom 60%'
  if (window.innerWidth < 500) {
    endMarker = 'bottom 80%'
  }
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[home-integrations]',
      start: 'top 100%',
      end: endMarker,
      scrub: 1,
      onEnter: () => ScrollTrigger.refresh(),
    },
  })

  tl.from('[integration-logo]', {
    z: '50rem',
    filter: 'blur(4px)',
    stagger: { each: 0.1 },
  })

  const logoFlip = gsap.timeline({
    scrollTrigger: {
      trigger: '[home-integrations]',
      start: 'top 70%',
      onEnter: () => ScrollTrigger.refresh(),
    },
    repeat: -1,
    yoyo: true,
  })

  logoFlip
    .to('[integration-logo-flip]', {
      delay: 1,
      rotationY: 0,
      stagger: { each: 0.1, from: 'random' },
    })
    .to({}, { duration: 1 })
}
