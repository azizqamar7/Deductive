export const sectionHero = () => {
  //   const heroVideo = document.querySelector('.hero-video')

  //   if (heroVideo) {
  //     heroVideo
  //       .play()
  //       .then(() => {
  //         console.log('not in low powermode')
  //       })
  //       .catch((error) => {
  //         console.log(error, 'in low powermode')
  //         $('.home_hero-video').css('display', 'none')
  //         $('.hero_video_thumbnail').css('display', 'block')
  //       })
  //   }

  const heroVideo = document.querySelector('.hero-video')
  const heroVideoThumbnail = document.querySelector('.hero_video_thumbnail')

  if (heroVideo && heroVideoThumbnail) {
    // Initially hide the video and show the thumbnail
    heroVideo.style.display = 'none'
    heroVideoThumbnail.style.display = 'block'

    // Function to play the video
    const playVideo = () => {
      heroVideo
        .play()
        .then(() => {
          console.log('Video started playing')
          heroVideo.style.display = 'block'
          heroVideoThumbnail.style.display = 'none'
        })
        .catch((error) => {
          console.log(error, 'Error playing video')
          // Keep thumbnail visible if there's an error
          heroVideo.style.display = 'none'
          heroVideoThumbnail.style.display = 'block'
        })
    }

    // Wait for the video to be loaded before attempting to play
    heroVideo.addEventListener('loadeddata', () => {
      // Video has loaded, now we can play it
      playVideo()
    })

    // Fallback in case 'loadeddata' event doesn't fire
    heroVideo.addEventListener('canplay', () => {
      if (heroVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        playVideo()
      }
    })
  }
}
