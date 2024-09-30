import gsap from 'gsap'

export const sectionLayoutChange = () => {
  const blockContentList = document.querySelectorAll(
    '[change-block-content=true]'
  )

  if (blockContentList) {
    const blockImageList = document.querySelectorAll('[change-block-image]')
    const blockProgress = document.querySelectorAll('[progress]')

    blockContentList.forEach((blockContent, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockContent,
          start: 'top 50%',
          // markers: true,
          onUpdate: () => {
            // Remove .layout-active class from all items
            blockContentList.forEach((item) => {
              // console.log(item)
              item.classList.remove('layout-active')
            })
            blockImageList.forEach((item) => {
              item.classList.remove('layout-active')
            })
            blockProgress.forEach((item) => {
              item.classList.remove('layout-active')
            })

            blockContentList[index].classList.add('layout-active')
            blockImageList[index].classList.add('layout-active')
            blockProgress[index].classList.add('layout-active')
          },
        },
      })
    })
  }

  const bgChangeIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_layout_change',
        start: 'top 0%',
        onEnter: () => {
          gsap.to('.section_layout_change, .layout_bg', {
            backgroundColor: '#061611',
            duration: 0.4,
          })
        },
        onLeaveBack: () => {
          gsap.to('.section_layout_change, .layout_bg', {
            backgroundColor: '#eef9f0',
            duration: 0.4,
          })
        },
      },
    })
  }

  bgChangeIx()
}
