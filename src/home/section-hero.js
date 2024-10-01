import gsap from 'gsap'

export const sectionHero = () => {
  const heroVideo = document.querySelector('.hero-video')

  if (heroVideo) {
    heroVideo
      .play()
      .then(() => {
        console.log('not in low powermode')
      })
      .catch((error) => {
        console.log(error, 'in low powermode')
        $('.home_hero-video').css('display', 'none')
        $('.hero_video_thumbnail').css('display', 'block')
      })
  }

  // Get the navbarOverlay element
  const navbarOverlay = document.querySelector('[navbar-overlay]')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[navbar-switch]',
      start: 'top 10%',
      // markers: true,
      onToggle: (self) => {
        if (self.isActive) {
          console.log('Scrolltrigger active')
          navbarOverlay.classList.remove('is-dark')
        } else {
          console.log('Scrolltrigger in-active')
          navbarOverlay.classList.add('is-dark')
        }
      },
    },
  })
}
