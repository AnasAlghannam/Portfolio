import * as React from "react";

import type { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Theme Switch Icons------------------------------------------
export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);
export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

// Searchbar Icon-------------------------------------------------------------
export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
// Chevron Icons-------------------------------------------------------------
export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

//Dropdown Icons-------------------------------------------------------------

export const AwardIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/award.svg"  
    alt="award"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const HalfBatteryIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/battery-half.svg"  
    alt="Battery-Half"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const BatteryIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/battery.svg"  
    alt="Battery"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)

export const BulbIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/bulb.svg"
    alt="bulb"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const ChipIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/chip.svg"  
    alt="chip"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const ConstructIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/construct.svg"
    alt="construct"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const DownloadIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/download.svg"
    alt="download"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const FileIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/file.svg"
    alt="file"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const GlobeIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/globe.svg"
    alt="globe"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const HammerIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/hammer.svg"
    alt="hammer"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const HomeIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/home.svg"
    alt="home"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const KeyIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/key.svg"
    alt="key"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const LaptopIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/laptop.svg"
    alt="laptop"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const NewsIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/news.svg"
    alt="news"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const PhoneIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/phone.svg"
    alt="phone"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const UploadIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/upload.svg"
    alt="upload"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const WarrantyIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/warranty.svg"
    alt="warranty"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const WrenchIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/wrench.svg"
    alt="wrench"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const AboutIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/about.svg"
    alt="about"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const MailIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/mail.svg"
    alt="mail"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const MapPinIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/mappin.svg"
    alt="mappin"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const InverterIcon = ({ className = "", size = 24, ...props }) => (
  <img
    src="/icons/inverter.svg"
    alt="inverter"
    width={size}
    height={size}
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)

// Language Flags Icons-------------------------------------------------------------
export const USFlag = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/usa.svg"
    alt="TikTok"
    className={className}
    {...props}
  />
)

export const SaudiFlag = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/saudi.svg"
    alt="TikTok"
    className={className}
    {...props}
  />
)
export const ChinaFlag = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/china.svg"
    alt="TikTok"
    className={className}
    {...props}
  />
)


// Social Media Icons-------------------------------------------------------------
export const TikTokIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/tiktok.svg"
    alt="TikTok"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)

export const LinkedinIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/linkedin.svg"
    alt="LinkedIn"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)

export const FacebookIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/facebook.svg"
    alt="Facebook"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const InstagramIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/instagram.svg"
    alt="Instagram"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const YoutubeIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/youtube.svg"
    alt="youtube"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
 //Download Icons-------------------------------------------------------------
  export const AndroidIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/android.svg"
    alt="android"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
  )
  export const IosIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/icons/ios.svg"
    alt="ios"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
// Batteries Page Icons-------------------------------------------------------------
  export const ShieldIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/shield.png"
    alt="shiled"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
  export const ParallelIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/parallel.png"
    alt="parallel"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const CycleIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/cycle.png"
    alt="cycle"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const AnotherWarrantyIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/warranty.png"
    alt="warranty"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const AddressIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/address.png"
    alt="address"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)
export const BmsIcon = ({ className = "w-6 h-6", ...props }) => (
  <img
    src="/bms.png"
    alt="bms"
    className={`${className} brightness-0 invert-[.6] dark:invert-[.8]`}
    {...props}
  />
)