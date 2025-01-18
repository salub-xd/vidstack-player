import { Player } from "@/components/Player";

export default function Home() {
  const logo = '/A24Spritefrightlogo.webp';
  const hls = 'https://vz-077e864b-356.b-cdn.net/982fa4cf-97ac-46e6-86e6-03ddaa42a3a9/playlist.m3u8';
  return (
    <div className="flex items-center justify-center w-full h-screen my-10">
      <div className=" w-2/4">
      <Player hlsUrl={hls} logo={logo}/>
      </div>
    </div> );
}
