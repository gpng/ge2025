export const cleanUrl = (urlStr: string) => {
  // Parse the URL
  const url = new URL(urlStr);

  // Iterate over all query‑param keys
  for (const key of Array.from(url.searchParams.keys())) {
    // If it starts with "utm_", delete it
    if (key.startsWith('utm_')) {
      url.searchParams.delete(key);
    }
  }

  // Reconstruct and return the full URL
  return url.toString();
};
