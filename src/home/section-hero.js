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

  //   const heroVideo = document.querySelector('.hero-video')
  //   const heroVideoThumbnail = document.querySelector('.hero_video_thumbnail')

  //   if (heroVideo && heroVideoThumbnail) {
  //     // Initially hide the video and show the thumbnail
  //     heroVideo.style.display = 'none'
  //     heroVideoThumbnail.style.display = 'block'

  //     // Function to play the video
  //     const playVideo = () => {
  //       heroVideo
  //         .play()
  //         .then(() => {
  //           console.log('Video started playing')
  //           heroVideo.style.display = 'block'
  //           heroVideoThumbnail.style.display = 'none'
  //         })
  //         .catch((error) => {
  //           console.log(error, 'Error playing video')
  //           // Keep thumbnail visible if there's an error
  //           heroVideo.style.display = 'none'
  //           heroVideoThumbnail.style.display = 'block'
  //         })
  //     }

  //     // Wait for the video to be loaded before attempting to play
  //     heroVideo.addEventListener('loadeddata', () => {
  //       // Video has loaded, now we can play it
  //       playVideo()
  //     })

  //     // Fallback in case 'loadeddata' event doesn't fire
  //     heroVideo.addEventListener('canplay', () => {
  //       if (heroVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
  //         playVideo()
  //       }
  //     })
  //   }

  const heroVideo = document.querySelector('.hero-video')
  const heroVideoThumbnail = document.querySelector('.hero_video_thumbnail')

  if (heroVideo && heroVideoThumbnail) {
    console.log('Initial setup: Video hidden, thumbnail visible')
    heroVideo.style.display = 'none'
    heroVideoThumbnail.style.display = 'block'

    const playVideo = () => {
      console.log('Attempting to play video...')
      heroVideo
        .play()
        .then(() => {
          console.log('Video started playing successfully')
          heroVideo.style.display = 'block'
          heroVideoThumbnail.style.display = 'none'
        })
        .catch((error) => {
          console.error('Error playing video:', error)
          heroVideo.style.display = 'none'
          heroVideoThumbnail.style.display = 'block'
        })
    }

    heroVideo.addEventListener('loadstart', () => {
      console.log('Video load started')
    })

    heroVideo.addEventListener('progress', () => {
      console.log('Video loading in progress')
    })

    heroVideo.addEventListener('canplay', () => {
      console.log('Video can start playing, but might still buffer')
      if (heroVideo.readyState >= 3) {
        console.log('Enough data loaded to start playing')
        playVideo()
      }
    })

    heroVideo.addEventListener('canplaythrough', () => {
      console.log('Video can play through without buffering')
    })

    heroVideo.addEventListener('loadeddata', () => {
      console.log('Video data is loaded')
      playVideo()
    })

    heroVideo.addEventListener('waiting', () => {
      console.log('Video is waiting for more data')
    })

    heroVideo.addEventListener('stalled', () => {
      console.log('Video is stalled')
    })
  }
}
