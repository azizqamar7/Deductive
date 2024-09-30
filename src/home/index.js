/**
 * This is the individual file for a webflow page.
 * For Home page js
 * Add or delete these files as per needed.
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marqueeScrollIx } from '../helpers/marquee-scroll'
import { sectionIntegration } from './section-integration'
import { sectionLayoutChange } from './section-layout-change'
import { sectionHero } from './section-hero'
import { sectionSecure } from './section-secure'

console.log('Hello from Home folder')

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // Section Hero
  sectionHero()

  // Marquee Ix
  marqueeScrollIx()

  // Section Layout Chagne
  sectionLayoutChange()

  // Section Integrations
  sectionIntegration()

  // Section Secure
  sectionSecure()
})
