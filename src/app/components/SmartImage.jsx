const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
import path from "path";

export default function OptimizedImage({ src, alt, ...props }) {
	const isDev = process.env.NODE_ENV === "development";

	const originalSrc = src.startsWith("/") ? src : `/${src}`;

	if (isDev) {
		return <img src={originalSrc} alt={alt} {...props} />;
	}

	const cleanPath = src.replace(/^\/?img\//, "").replace(/\.[^/.]+$/, "");
	const fileName = path.basename(src, path.extname(src));

	return (
		<picture>
			<source srcSet={`${basePath}/optimized/${fileName}.avif`} type="image/avif" />
			<source srcSet={`${basePath}/optimized/${fileName}.webp`} type="image/webp" />
			<img src={`${basePath}/optimized/${fileName}.jpg`} alt={alt} {...props} />
		</picture>

		// <picture>
		// 	<source srcSet={`${basePath}/optimized/${cleanPath}.avif`} type="image/avif" />
		// 	<source srcSet={`${basePath}/optimized/${cleanPath}.webp`} type="image/webp" />
		// 	<img src={`${basePath}/optimized/${cleanPath}.jpg`} alt={alt} {...props} />
		// </picture>
	);
}
