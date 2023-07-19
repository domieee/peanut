const cursor = document.querySelector('.cursor');
const container = document.querySelector('.sectionOne')

const cta = document.querySelector('.landingpage-cta')
const stroke = document.querySelector('.strokeBusiness')
const body = document.querySelector('body');

const ctaHeading = document.querySelector('.cta-heading');
const ctaSubtext = document.querySelector('.cta-subtext')
const sectionTwoHeading = document.querySelector('.section-two-heading')

const secondBlob = document.querySelector('#blobSvg2')

const techno = document.querySelector('.techno')
let blobExpanded = false

function updateCursorPositionOnScroll() {




    const scrollTop = window.scrollY
    const scrollFactor = 0.3
    const cursorOffset = scrollTop * scrollFactor

    // Blob Movement --->

    if (scrollTop <= 1550) {
        cursor.style.top = `${4 + cursorOffset / 10}%`
    }

    if (scrollTop < 1350) {
        cursor.style.width = '170px'
        cursor.style.height = '170px'
        cursor.style.left = '50%'
    }

    if (scrollTop > 1350) {
        cursor.style.width = '40%'
        cursor.style.height = '40%'
        cursor.style.left = `${30}%`
        cursor.style.top = `${70}%`
    }

    if (scrollTop > 2500) {
        cursor.style.width = '300px'
        cursor.style.height = '300px'
        cursor.style.left = '69%'
        cursor.style.top = '47%'
    }

    if (scrollTop > 3600) {
        cursor.style.width = '4000px'
        cursor.style.height = '4000px'
        cursor.style.left = '50%'
        ctaHeading.style.opacity = 0
        ctaSubtext.style.opacity = 0
        sectionTwoHeading.style.opacity = 1
        blobExpanded = true
    }
    console.log("🚀 ~ file: index.js:65 ~ updateCursorPositionOnScroll ~ scrollTop:", scrollTop)
    if (scrollTop < 3600) {
        ctaHeading.style.opacity = 1
        ctaSubtext.style.opacity = 1
        sectionTwoHeading.style.opacity = 0
        cursor.style.opacity = 1
        blobExpanded = false
    }

    if (blobExpanded && cursor.offsetHeight >= 3600) {

        stroke.style.opacity = 1
        stroke.style.width = '100%'
        stroke.style.height = '100vh'

        sectionTwoHeading.style.opacity = 1
        cta.style.opacity = 0
        cta.style.width = 0
        cta.style.height = 0
        cursor.style.left = '50%'
        cursor.style.top = '4%'
        container.style.backgroundColor = '#000'
        secondBlob.style.display = 'block'
        secondBlob.style.width = '150px'
        secondBlob.style.height = '150px'
    }

    if (!blobExpanded && cursor.offsetHeight <= 3600) {
        cta.style.width = '100%'
        sectionTwoHeading.style.opacity = 0
        cta.style.opacity = 1
        stroke.style.opacity = 0
        stroke.style.width = 0
        stroke.style.height = 0
        cta.style.height = '100vh'
        secondBlob.style.width = 0
        secondBlob.style.height = 0
    }



    // <---
}



// Attach the updateCursorPositionOnScroll function to the scroll event
window.addEventListener('scroll', () => {
    updateCursorPositionOnScroll()
});