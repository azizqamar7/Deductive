import gsap from 'gsap'

export const sectionSecure = () => {
  //   const darkTl = gsap.timeline()

  //   darkTl
  // .to('.section_home_secure', {
  //   backgroundColor: '#061611',
  //   color: '#a8b5ad',
  //   duration: 0.4,
  //   ease: 'power2.out',
  // })
  // .to('.section_home_secure h2', { color: '#fff' }, 0)
  // .to(
  //   '.section_home_secure .text-color-dark-green-light',
  //   { color: '#348e77' },
  //   0
  // )

  //   const lightTl = gsap.timeline()

  //   lightTl
  //     .to('.section_home_secure', {
  //       backgroundColor: '#eef9f0',
  //       duration: 0.4,
  //       color: '#0d251f',
  //       ease: 'power2.out',
  //     })
  //     .to('.section_home_secure h2', { color: '#0d251f' }, 0)
  //     .to(
  //       '.section_home_secure .text-color-dark-green-light',
  //       { color: '#194439' },
  //       0
  //     )

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home_secure',
      start: 'top 0%',
      //   onEnter: () => {
      //     darkTl.play()
      //   },
      //   onLeaveBack: () => {
      //     lightTl.restart()
      //   },
    },
  })

  tl.to('.section_home_secure', {
    backgroundColor: '#061611',
    color: '#a8b5ad',
    duration: 0.4,
    ease: 'power2.out',
  })
    .to('.section_home_secure h2', { color: '#fff' }, 0)
    .to(
      '.section_home_secure .text-color-dark-green-light',
      { color: '#348e77' },
      0
    )
}
