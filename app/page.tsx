import { Player } from "@/components/Player";

export default function Home() {
  const logo = '/A24Spritefrightlogo.webp';
  const hls = 'https://files.vidstack.io/sprite-fight/hls/stream.m3u8';
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className=" w-2/3">
      <Player hlsUrl={hls} logo={logo}/>
      </div>
    </div> );
}
