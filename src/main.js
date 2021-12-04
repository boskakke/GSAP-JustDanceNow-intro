import gsap from 'gsap'

const words = document.querySelectorAll('.gallery__image')

const main = gsap.timeline({ repeat: -1 })

for (let i = 0; i < words.length; i++) {
	let delay = i - 1
	let wordTL = gsap.timeline()
	if (i !== 0) {
		wordTL.from(words[i], {
			duration: 1,
			yPercent: 100,
			ease: 'power2.out',
		})
	} else {
		// Handle the first one specially
		delay += 1
		gsap.set(words[0], { opacity: 1, yPercent: 0 })
	}

	if (i !== words.length - 1) {
		wordTL.to(words[i], {
			duration: 1,
			yPercent: -100,

			ease: 'power2.out',
		})
	}
	main.add(wordTL, delay)
}

// Ser godt ud:
// 	.from(images[0], { y: 30, opacity: 0, duration: 0.75, ease: 'expo.out' }, '<+=1')

// .to(images[0], { y: -60, duration: 1.5, ease: 'power3.in' }, '+=1')
// .from(images[1], { y: 30, opacity: 0, duration: 0.75, ease: 'expo.out' }, '<+=1')
// .to(images[1], { y: -60, duration: 1.5, ease: 'power3.in' }, '+=1')
// .from(images[2], { y: 30, opacity: 0, duration: 0.75, ease: 'expo.out' }, '<+=1')
// .to(images[2], { y: -60, duration: 1.5, ease: 'power3.in' }, '+=1')
// 		.from(images[0], { y: 30, opacity: 0, duration: 0.75, ease: 'expo.out' }, '<+=1')

// const NewTimeline = gsap.timeline
// for (let i = 0; i < headlines.length; i++) {
// 	let delay = i - 1
// 	const headlinesTL = gsap.timeline()
// 	if (i === 0) {
// 		// first
// 		delay += 1
// 		gsap.set(headlines[0], { opacity: 1, yPercent: 0 })
// 	} else {
// 		headlinesTL.from(headlines[i], {
// 			duration: 1,
// 			yPercent: 100,
// 			opacity: 0,
// 			ease: 'power2.out',
// 		})
// 	}

// 	if (i !== headlines.length - 1) {
// 		headlinesTL.to(headlines[i], {
// 			duration: 1,
// 			yPercent: -100,
// 			opacity: 1,
// 			ease: 'power2.out',
// 		})
// 	}
// 	NewTimeline.add(headlinesTL, delay)
// }

// function runOnce() {
// 	console.log('runOnce');
// 	timeline.play()
// }
// function restart() {
// 	timeline.seek(.75)
// 	firstTime = false
// }

const calculateDiagonal = () => {
	const screenWidth = window.innerWidth
	const screenHeight = window.innerHeight
	const diagonal = Math.ceil(
		Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight)
	)
	document.documentElement.style = '--diagonal:' + diagonal + 'px'
}

window.addEventListener('resize', calculateDiagonal)
calculateDiagonal()

const introTL = gsap.timeline()
const introDuration = 2;
const introDistance = '10';
const runIntro = (introBackground) => {
	introTL
		.addPause()
		.set('.intro__wrapper', { opacity: 1 })
		.fromTo(
			'.intro__wrapper',
			{ '--transform': '-' + introDistance },
			{ '--transform': introDistance, ease: 'none', duration: introDuration }
		)
		.fromTo(
			'.intro__wrapper',
			{ '--background': 'transparent' },
			{
				'--background': introBackground,
				ease: 'none',
				duration: introDuration * 0.5,
				ease: 'expo.out',
			},
			'<'
		)
		.fromTo(
			'.intro__wrapper',
			{ '--background': introBackground },
			{
				'--background': 'transparent',
				ease: 'none',
				duration: introDuration * 0.5,
				ease: 'expo.in',
			},
			'>'
		)
		.set('.intro__wrapper', { opacity: 0 })
}



const links = document.querySelectorAll('.links')

links.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault()
		const bgColor = e.target.textContent.toLowerCase()
		console.log(bgColor);
		runIntro(bgColor)
	})
});
