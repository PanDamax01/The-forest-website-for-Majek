let btnNavPlate, nav, btnNav, linksNav, footerYear, sections, form, inputs

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	btnNavPlate = document.querySelector('.plate2')
	nav = document.querySelector('.nav__list')
	btnNav = document.querySelector('.nav__btn')
	linksNav = document.querySelectorAll('.nav__link')
	footerYear = document.querySelector('.footer__year')
	sections = document.querySelectorAll('.section')
	form = document.querySelector('form')
	inputs = form.querySelectorAll('[required]')
}

const prepareDOMEvents = () => {
	btnNav.addEventListener('click', showNav)
	linksNav.forEach((el) => {
		el.addEventListener('click', hiddenNav)
	})
	sections.forEach((section) => {
		observer.observe(section)
	})
	handleCurrentYear()
	inputs.forEach((el) =>
	el.addEventListener('input', (e) =>
		markFieldAsError(e.target, !e.target.checkValidity())
	)
)
}

const showNav = () => {
	btnNavPlate.classList.toggle('active')
	nav.classList.toggle('actived')

	if (btnNavPlate.classList.contains('active')) {
		nav.classList.remove('deactivate')
		document.body.style.overflow = 'hidden'
	} else {
		nav.classList.add('deactivate')
		document.body.style.overflow = 'auto'
	}
}

const hiddenNav = () => {
	document.body.style.overflow = 'auto'
	btnNavPlate.classList.toggle('active')
	nav.classList.remove('actived')
	nav.classList.add('deactivate')
}

const options = {
	root: null,
	threshold: 0.9,
}

const activateNavLink = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const id = entry.target.getAttribute('id')
			addActiveClass(id)
		}
	})
}

const addActiveClass = (id) => {
	linksNav.forEach((link) => {
		if (link.getAttribute('href') === `index.html#${id}`) {
			link.classList.add('nav__link--active')
		} else {
			link.classList.remove('nav__link--active')
		}
	})
}

const observer = new IntersectionObserver(activateNavLink, options)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

const markFieldAsError = (field, show) => {
	if (show) {
		field.classList.add('field-error')
	} else {
		field.classList.remove('field-error')
	}
}

document.addEventListener('DOMContentLoaded', main)