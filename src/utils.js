export function day(date) {
	const milli = Math.abs(
		new Date().setHours(0, 0, 0) - new Date(date).setHours(0, 0, 0)
	);
	const day = Math.floor(milli / (60 * 60 * 24 * 1000));
	return day;
}

export function dateAgo(day) {
	if (day === 0) {
		return "Today";
	} else if (day < 7) {
		return `${day}d ago`;
	} else if (day < 30) {
		return `${Math.floor(day / 7)}w ago`;
	} else {
		return `${Math.floor(day / 30)}mo ago`;
	}
}
