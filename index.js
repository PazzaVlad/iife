'use strict'

const iife = (fn) => fn()

const tryor = (fn, v) => {
	try {
		return fn()
	} catch (e) {
		return v
	}
}

const tryorLog = (fn, v) => {
	try {
		return fn()
	} catch (e) {
		console.error(e)
		return v
	}
}

module.exports = {
	iife,
	tryor,
	tryorLog,
}
