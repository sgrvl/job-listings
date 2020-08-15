export default function dateAgo(date) {
	const milli = Math.abs(new Date() - new Date(date));
	const day = Math.floor(milli / (60 * 60 * 24 * 1000));
	return day;
}
