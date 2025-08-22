export function getYoutubeVideoId(url: string | null): string | null {
  try {
    if (!url) return null;

    const parsedUrl = new URL(url);

    // 1) youtube.com/watch?v= 형태
    if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v');
    }

    // 2) youtu.be/ 형태
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1);
    }

    // 3) youtube.com/embed/ 형태
    if (parsedUrl.pathname.startsWith('/embed/')) {
      return parsedUrl.pathname.split('/embed/')[1];
    }

    return null;
  } catch {
    return null;
  }
}
