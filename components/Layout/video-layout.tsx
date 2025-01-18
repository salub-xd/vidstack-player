'use client'

import captionStyles from './captions.module.css'
import styles from './video-layout.module.css'

import { Captions, Controls, Gesture } from '@vidstack/react'

import * as Buttons from './parts/buttons'
import * as Menus from './parts/menus'
import * as Sliders from './parts/sliders'
// import { TimeGroup } from './parts/time-group'
import { Title } from './parts/title'

export interface VideoLayoutProps {
  title: string
  // logo = nextjs image
  logo?: string | null
  thumbnails?: string | undefined
  chapters?: string | null
}

export function VideoLayout({
  thumbnails = undefined,
}: VideoLayoutProps) {
  return (
    <>
      <Gestures />
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />
      <Controls.Root
        className={`${styles.controls} data-[visible]:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity pointer-events-none`}
      >
        <div className="flex-1" />
        <Controls.Group className="flex w-full items-center px-2">
          <Sliders.Time thumbnails={thumbnails} />
          {/* <TimeGroup /> */}
        </Controls.Group>
        <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-1 relative">
          <Buttons.Play tooltipPlacement="top" />
          {/* <Buttons.SeekBackward tooltipPlacement="top start" /> */}
          {/* <Buttons.SeekForward tooltipPlacement="top" /> */}
          <Buttons.Mute tooltipPlacement="top" toggleSliderOnUnmute={false} />
          {/* <Sliders.Volume /> */}
          {/* <div className="flex-1" /> */}
          <Title />
          {/* <div className="flex-1" /> */}
          <Buttons.Caption tooltipPlacement="top" />
          {/* {chapters && (
            <Menus.Chapters
              placement="top end"
              tooltipPlacement="top"
              chaptersURL={chapters}
            />
          )} */}
          <Menus.Settings placement="top end" tooltipPlacement="top" />
          {/* <Buttons.PIP tooltipPlacement="top" /> */}
          {/* <Buttons.Chromecast tooltipPlacement="top" /> */}
          {/* <Buttons.AirPlay tooltipPlacement="top" /> */}
          <Buttons.Fullscreen tooltipPlacement="top end" />
        </Controls.Group>
      </Controls.Root>
    </>
  )
}

export function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  )
}

export function GesturesNoFullscreen() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  )
}
