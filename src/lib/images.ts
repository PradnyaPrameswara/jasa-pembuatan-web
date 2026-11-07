/**
 * Produce responsive image candidates for existing licensed Unsplash photos.
 * Astro evaluates this when rendering HTML; no client-side code is added.
 */
export function getUnsplashSrcSet(src: string, widths: readonly number[]): string {
  const base = new URL(src);
  if (base.origin !== "https://images.unsplash.com") {
    throw new Error("Expected an Unsplash image source");
  }

  return widths
    .map((width) => {
      const candidate = new URL(base);
      candidate.searchParams.set("w", String(width));
      candidate.searchParams.set("q", "80");
      return `${candidate.toString()} ${width}w`;
    })
    .join(", ");
}
