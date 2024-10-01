import gsap from 'gsap'

export const sectionHorizontalScroll = () => {
  const layoutHorizontal = document.querySelector('[layout-horizontal]')
  if (layoutHorizontal) {
    const movelayout = layoutHorizontal.getAttribute('layout-horizontal')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.horizontal_wrapper',
        start: 'top 0%',
        end: '+=1200px',
        pin: true,
        scrub: 1,
        // markers: true,
      },
    })

    tl.to(layoutHorizontal, { x: movelayout })
  }

  const bgChangeIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[section_layout_change]',
        start: 'top 0%',
        onEnter: () => {
          gsap.to('[section_layout_change], [layout_bg]', {
            backgroundColor: '#061611',
            duration: 0.4,
          })
        },
        onLeaveBack: () => {
          gsap.to('[section_layout_change], [layout_bg]', {
            backgroundColor: '#eef9f0',
            duration: 0.4,
          })
        },
      },
    })
  }

  bgChangeIx()
}
