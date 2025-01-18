'use client'
import { Menu, Thumbnail, useChapterOptions } from '@vidstack/react'
//import RenderChapter from './renderChapter'

function ChaptersMenu({ chaptersURL }: { chaptersURL: string }) {
  const options = useChapterOptions()
  return (
    <Menu.Root>
      <span className="w-full text-center text-gray-200 my-3">Chapters</span>
      <Menu.RadioGroup
        value={options.selectedValue}
        className="vds-chapters-radio-group vds-radio-group"
        data-thumbnails
      >
        {options.length > 0 ? (
          options.map(
            ({ cue, label, value, startTimeText, durationText, select, setProgressVar }) => (
              <Menu.Radio
                className="vds-chapter-radio vds-radio"
                value={value}
                key={value}
                onSelect={select}
                ref={setProgressVar}
              >
                <Thumbnail.Root
                  className="vds-thumbnail"
                  src={chaptersURL}
                  time={cue.startTime}
                >
                  <Thumbnail.Img />
                </Thumbnail.Root>
                <div className="vds-chapter-radio-content">
                  <span className="vds-chapter-radio-label">{label}</span>
                  <span className="vds-chapter-radio-start-time" data-part="start-time">
                    {startTimeText}
                  </span>
                  <span className="vds-chapter-radio-duration" data-part="duration">
                    {durationText}
                  </span>
                </div>
              </Menu.Radio>
            )
          )
        ) : (
          "Loading..."
        )}
      </Menu.RadioGroup>
    </Menu.Root>
  )
}

export default ChaptersMenu
