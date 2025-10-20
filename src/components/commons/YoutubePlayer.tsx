import YouTubePlayer from 'react-player/youtube';

export default function YoutubePlayer({ videoId }: { videoId: string | null }) {
  const opts = {
    height: '240',
    width: '486',
    playerVars: {
      autoplay: 0, // 자동 재생 막음
    },
  };

  if (!videoId) return null; // 비디오 ID가 없으면 아무것도 렌더링하지 않음

  return <YouTubePlayer videoId={videoId} opts={opts} />;
}
