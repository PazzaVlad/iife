/**
 * Immediately Invoked Function Expression (IIFE)
 * This function exists because writing an IIFE is ugly!
 * @example
 * ```ts
 * // This is better
 * const result = iife(() => {
 *    console.log('Hello World!');
 *    return 42;
 * });
 *
 * // This is ugly
 * const result = (function () {
 *     console.log('Hello World!');
 *     return 42;
 * })();
 * ```
 *
 * @param fn A function to be called immediately
 * @returns The return value of the function
 */
export const iife = <T>(fn: () => T) => fn();

/**
 * Try to call a function, and return a default value if it throws an error
 *
 * @param fn A function to try to call
 * @param or The value to return if the function throws an error
 * @returns The return value of the function, or the value of `or` if the function throws an error
 */
export const tryor = <T, Or>(fn: () => T, or: Or) => {
	try {
		return fn();
	} catch {
		return or;
	}
};

/**
 * Try to call a function, and return a default value if it throws an error.
 * Also call a handler function if the function throws.
 *
 * @param fn A function to try to call
 * @param or The value to return if the function throws an error
 * @param handler A function to call if the function throws an error
 * @returns The return value of the function, or the value of `or` if the function throws an error
 */
export const tryorHandle = <T, Or>(fn: () => T, or: Or, handler: (e: unknown) => void) => {
	try {
		return fn();
	} catch (e: unknown) {
		handler(e);
		return or;
	}
};

/**
 * tryorLog is a shorthand for {@link tryorHandle} with a console.error handler
 *
 * @param fn A function to try to call
 * @param or The value to return if the function throws an error
 * @returns The return value of the function, or the value of `or` if the function throws an error
 */
export const tryorLog = <T, Or>(fn: () => T, or: Or) =>
	tryorHandle(fn, or, error => console.error(error));
