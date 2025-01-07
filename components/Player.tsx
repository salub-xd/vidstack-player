'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { useEffect, useRef } from 'react';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Menu,
  useVideoQualityOptions,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

interface VideoJSPlayerProps {
  hlsUrl?: string;
}

import { type IconComponent } from "@vidstack/react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, SettingsMenuIcon } from "@vidstack/react/icons";
import * as React from "react";

interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
  icon: IconComponent; // Assuming IconType is the correct type for the 'Icon' component
}

function SubmenuButton({
  label,
  hint,
  icon: Icon,
  disabled,
}: SubmenuButtonProps) {
  return (
    <Menu.Button className="vds-menu-item" disabled={disabled}>
      <ChevronLeftIcon className="vds-menu-close-icon" />
      <Icon className="vds-icon" />
      <span className="vds-menu-item-label">{label}</span>
      <span className="vds-menu-item-hint">{hint}</span>
      <ChevronRightIcon className="vds-menu-open-icon" />
    </Menu.Button>
  );
}

export default SubmenuButton;

function QualitySubmenu() {
    const options = useVideoQualityOptions(),
      currentQuality = options.selectedQuality?.height,
      hint =
        options.selectedValue !== "auto" && currentQuality
          ? `${currentQuality}p`
          : `Auto${currentQuality ? ` (${currentQuality}p)` : ""}`;
  
    return (
      <Menu.Root>
        <SubmenuButton
          label="Quality"
          hint={hint}
          disabled={options.disabled}
          icon={SettingsMenuIcon}
        />
        <Menu.Content className="vds-menu-items">
          <Menu.RadioGroup
            className="vds-radio-group"
            value={options.selectedValue}
          >
            {options.map(({ label, value, bitrateText, select }) => (
              <Menu.Radio
                className="vds-radio"
                value={value}
                onSelect={select}
                key={value}
              >
                <CheckIcon className="vds-icon" />
                <span className="vds-radio-label">{label}</span>
                {bitrateText ? (
                  <span className="vds-radio-hint">{bitrateText}</span>
                ) : null}
              </Menu.Radio>
            ))}
          </Menu.RadioGroup>
        </Menu.Content>
      </Menu.Root>
    );
  }

export const Player: React.FC<VideoJSPlayerProps> = ({ hlsUrl }) => {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      console.log('Is paused?', paused);
      console.log('View type:', viewType);
    });

  }, []);

  function onProviderChange(
    provider: MediaProviderAdapter | null
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  return (
    <>
      <MediaPlayer
        className="player"
        title="Sprite Fight"
        src={hlsUrl}
        viewType='video'
        streamType='on-demand'
        logLevel='warn'
        crossOrigin
        playsInline
        onProviderChange={onProviderChange}
        ref={player}
        aspectRatio={'16/9'}
      >
        <MediaProvider>
        </MediaProvider>
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          slots={{
            settingsMenuItemsEnd: <QualitySubmenu /> 
          }}
        />
      </MediaPlayer>
    </>
  );
}