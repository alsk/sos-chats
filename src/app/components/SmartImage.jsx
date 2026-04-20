const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export default function OptimizedImage({ src, alt, ...props }) {
	const isDev = process.env.NODE_ENV === "development";

	const originalSrc = src.startsWith("/") ? src : `/${src}`;

	if (isDev) {
		return <img src={originalSrc} alt={alt} {...props} />;
	}

	const cleanPath = src.replace(/^\/?img\//, "").replace(/\.[^/.]+$/, "");

	return (
		<picture>
			<source srcSet={`/optimized/${cleanPath}.avif`} type="image/avif" />
			<source srcSet={`/optimized/${cleanPath}.webp`} type="image/webp" />
			<img src={`/optimized/${cleanPath}.jpg`} alt={alt} {...props} />
		</picture>

		// <picture>
		// 	<source srcSet={`${basePath}/optimized/${cleanPath}.avif`} type="image/avif" />
		// 	<source srcSet={`${basePath}/optimized/${cleanPath}.webp`} type="image/webp" />
		// 	<img src={`${basePath}/optimized/${cleanPath}.jpg`} alt={alt} {...props} />
		// </picture>
	);
}
