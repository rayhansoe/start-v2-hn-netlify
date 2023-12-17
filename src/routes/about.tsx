export default function Page() {
	const t = Date.now();
	const d = new Date(t);
	return (
		<div>
			<h1>About</h1>
			<p>Hello World</p>
			<h2>
				<strong>Build at </strong>
				{d.toUTCString()}
			</h2>
			<h2>
				<strong>Build at </strong>
				{Date.now() - t}s ago
			</h2>
		</div>
	);
}
