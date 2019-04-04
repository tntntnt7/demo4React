export const formatDate = (UTCDateString: string, format?: 'yyyy' | 'yyyy-MM-dd'): string => {
	const date = new Date(UTCDateString)

	const year = _f(date.getUTCFullYear())
	const month = _f(date.getUTCMonth() + 1)
	const day = _f(date.getUTCDate())
	const hour = _f(date.getUTCHours())
	const minute = _f(date.getUTCMinutes())
	const second = _f(date.getUTCSeconds())

	let target = ''

	switch (format) {
		case 'yyyy':
			target = `${year}`
			break
		case 'yyyy-MM-dd':
			target = `${year}-${month}-${day}`
			break
		default:
			target = `${year}-${month}-${day} ${hour}:${minute}:${second}`
			break
	}

	return target
}

export const secondsToHMS = (second: number): string => {
	const hour = second / 3600
	second = second % 3600
	const minute = second / 60
	second = second % 60
	return `${_f(hour)}:${_f(minute)}:${_f(second)}`
}

const _f = (num: number): string => {
	if (num < 10) {
		return `0${num}`
	}

	return `${num}`
}
