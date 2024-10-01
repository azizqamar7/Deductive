import gsap from 'gsap'

export const sectionVideoTrigger = () => {
  const videoTrigger = document.querySelectorAll('[video-trigger="desktop"]')
  const video = document.querySelectorAll('[feature-video] video')

  videoTrigger.forEach((trigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top 50%',
        markers: true,
        onEnter: () => {
          if (video) {
            video.play().then(() => {
              console.log('not in low powermode')
            })
            // .catch((error) => {
            //   console.log(error, 'in low powermode')
            //   $('.home-hero_video-wrapper').css('display', 'none')
            //   $('.home-image').css('display', 'block')
            // })
          }
        },
      },
    })
  })
}
