import { classNames } from '@/utils'
import {
  Title as MediaTitle,
  // useMediaPlayer,
  // useMediaState,
  ChapterTitle as MediaChapterTitle,
  //useChapterTitle,
} from '@vidstack/react'
// import Image from 'next/image'

export function Title() {
  //const isPaused = useMediaState('paused')
  return (
    <span
      className={classNames(
        'z-20 w-h-full sm:w-auto absolute sm:relative inline-block flex-1 overflow-visible sm:overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-white/70 text-center',
        'left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 mt-[9%] sm:mt-0 p-0'
      )}
    >
      <div
        className={classNames(
          'flex flex-col items-center justify-normal sm:min-h-0 sm:px-0 sm:pb-0 sm:bg-inherit sm:relative sm:translate-x-0 sm:left-0',
          'bg-opacity-80 sm:transition-none transition-colors duration-1000 absolute left-1/2 -translate-x-1/2 rounded-b-lg px-4 pt-3 sm:pt-0 pb-2 sm:pb-0 min-h-14 justify-center',
          /* isPaused ? 'bg-black delay-1000' : 'bg-transparent delay-200', */
          'max-w-[98vw] w-[90vw] sm:w-auto sm:max-w-none'
        )}
      >
        <MediaTitle className="text-pretty" />
        <MediaChapterTitle className="text-pretty" />
      </div>
    </span>
  )
}

// interface VideoMetadataProps {
//   title?:string;
//   logo?:string;
// }

// export function VideoMetadata({title, logo}:VideoMetadataProps) {
//   const isPaused = useMediaState('paused'),
//     player = useMediaPlayer()
//   return (
//     <div
//       className={classNames(
//         `media-labels z-10 relative`,
//         isPaused || player.currentTime <= 0 ? '' : 'playing'
//       )}
//     >
//       <div className={classNames('media-title', isPaused ? '' : 'playing')}>
//         {/* Title: {title} */}
//         <div className='max-w-32 max-h-12 relative left-4'>
//           {logo ? <Image src={logo} layout='fill' className='!relative !h-auto' alt='video image' /> : null}
//         </div>
//       </div>
//     </div>
//   )
// }
