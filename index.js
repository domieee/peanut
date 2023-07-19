const cursor = document.querySelector('.cursor');

const cta = document.querySelector('.landingpage-cta')
const body = document.querySelector('body');

const ctaHeading = document.querySelector('.cta-heading');
const ctaSubtext = document.querySelector('.cta-subtext')
const sectionTwoHeading = document.querySelector('.section-two-heading')

const techno = document.querySelector('.techno')



function updateCursorPositionOnScroll() {

    const offsetParentWidth = techno.offsetParent.offsetWidth;
    const offsetParentHeight = techno.offsetParent.offsetHeight;

    const middleXPercentage = ((techno.offsetLeft + techno.offsetWidth / 2) / offsetParentWidth) * 100;
    const middleYPercentage = ((techno.offsetTop + techno.offsetHeight / 2) / offsetParentHeight) * 100;

    const scrollTop = window.scrollY
    const scrollFactor = 0.3
    const cursorOffset = scrollTop * scrollFactor


    if (scrollTop <= 1550) {
        cursor.style.top = `${4 + cursorOffset / 10}%`
    }
    console.log(middleXPercentage)

    if (scrollTop < 1650) {
        cursor.style.width = '170px'
        cursor.style.height = '170px'
        cursor.style.left = '50%'
    }
    if (scrollTop > 1650) {
        cursor.style.width = '40%'
        cursor.style.height = '40%'
        cursor.style.left = `${middleXPercentage}%`
        cursor.style.top = `${middleYPercentage - 20}%`
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


    } else {
        body.style.backgroundColor = '#fff'
        ctaHeading.style.opacity = 1
        ctaSubtext.style.opacity = 1
        sectionTwoHeading.style.opacity = 0
        cursor.style.opacity = 1
    }



}

// Attach the updateCursorPositionOnScroll function to the scroll event
window.addEventListener('scroll', () => {
    updateCursorPositionOnScroll()
});