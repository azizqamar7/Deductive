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
}
