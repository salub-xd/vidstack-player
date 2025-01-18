'use client'
import { RadioGroup } from '@vidstack/react'
import { useCallback } from 'react'
import Image from 'next/image'

// function convertTimeFormat(startTimeText) {
//   const parts = startTimeText.split(':')
//   let hours, minutes, seconds

//   if (parts.length === 3) {
//     ;[hours, minutes, seconds] = parts
//   } else if (parts.length === 2) {
//     hours = '00'
//     ;[minutes, seconds] = parts
//   } else {
//     return '00:00:00' // Invalid input
//   }

//   hours = hours.padStart(2, '0')
//   minutes = minutes.padStart(2, '0')
//   seconds = seconds.padStart(2, '0')

//   return `${hours}:${minutes}:${seconds}`
// }

// Use this for granular control over images loaded,
// helpful for very long videos that would overwhelm the browser
// especially mobile devices.
// You can load individual images through this method.
// You'd need to replace `Thumbnail.Root` in `chapters.js`
interface RenderChapterProps {
  label: string;
  value: string;
  startTimeText: string;
  durationText: string;
  select: (value: string) => void;
  setProgressVar: (element: HTMLElement | null) => void;
  chapterThumbnailURL?: string;
  chapterTitle: string;
}

const RenderChapter = ({
  label,
  value,
  startTimeText,
  durationText,
  select,
  setProgressVar,
  chapterThumbnailURL,
  chapterTitle,
}: RenderChapterProps) => {
  const handleSelect = useCallback(() => {
    select(value)
  }, [select, value])

  return (
    <RadioGroup.Item
      className="vds-chapter-radio vds-radio max-w-[91vw]"
      value={value}
      key={value + chapterTitle}
      onSelect={handleSelect}
      ref={setProgressVar}
    >
      <Image
        className="vds-thumbnail"
        src={chapterThumbnailURL ?? '/images/placeholder.png'}
        alt="Chapter Thumbnail"
        layout="responsive"
        width={500}
        height={300}
      />
      <div className="vds-chapter-radio-content">
        <span className="vds-chapter-radio-label" data-part="label">
          {label}
        </span>
        <span className="vds-chapter-radio-start-time" data-part="start-time">
          {startTimeText}
        </span>
        <span className="vds-chapter-radio-duration" data-part="duration">
          {durationText}
        </span>
      </div>
    </RadioGroup.Item>
  )
}

export default RenderChapter
