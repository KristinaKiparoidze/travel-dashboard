/**
 * Fetch an image from Unsplash using the search endpoint.
 * Returns null if the API fails or no results are found.
 */
export async function fetchUnsplashImage(
  query: string
): Promise<string | null> {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return null;
  }

  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=1&orientation=landscape&content_filter=high`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();

    return json.results?.[0]?.urls?.regular ?? null;
  } catch {
    return null;
  }
}
