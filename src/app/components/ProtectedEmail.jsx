"use client"

export default function ProtectedEmail({ user, domain, label }) {
	const handleReveal = (e) => {
		e.currentTarget.href = `mailto:${user}@${domain}`;
	};

	return (
		<a href="#" onMouseEnter={handleReveal} onFocus={handleReveal}>
			{label ?? `${user}@${domain}`}
		</a>
	);
}
