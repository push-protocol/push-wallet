import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const YellowBonusActivitySubscribers: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="YellowBonusActivitySubscribers"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
        >
          <path
            d="M47.6429 18.6348C48.9524 20.903 48.9524 23.6974 47.6429 25.9656L39.3083 40.4016C37.9987 42.6697 35.5787 44.0669 32.9596 44.0669H16.2904C13.6714 44.0669 11.2513 42.6697 9.94175 40.4016L1.60714 25.9656C0.297621 23.6974 0.297621 20.903 1.60714 18.6348L9.94175 4.19883C11.2513 1.93068 13.6714 0.533447 16.2904 0.533447H32.9596C35.5787 0.533447 37.9987 1.93068 39.3082 4.19883L47.6429 18.6348Z"
            fill="#F3C546"
          />
          <path
            d="M43.3628 18.8362C44.4288 20.6826 44.4288 22.9575 43.3628 24.8039L36.5779 36.5556C35.5119 38.4021 33.5418 39.5395 31.4097 39.5395H17.84C15.7079 39.5395 13.7378 38.4021 12.6718 36.5556L5.88692 24.8039C4.8209 22.9575 4.8209 20.6826 5.88692 18.8362L12.6718 7.08443C13.7378 5.23802 15.7079 4.10059 17.84 4.10059H31.4097C33.5418 4.10059 35.5119 5.23802 36.5779 7.08443L43.3628 18.8362Z"
            fill="black"
          />
          <path
            d="M43.3627 20.7263C44.4287 22.5025 44.4287 24.6908 43.3627 26.4671L36.5778 37.772C35.5118 39.5482 33.5417 40.6424 31.4097 40.6424H17.8399C15.7079 40.6424 13.7378 39.5482 12.6718 37.772L5.88692 26.4671C4.8209 24.6908 4.8209 22.5025 5.88692 20.7263L12.6718 9.4213C13.7378 7.64509 15.7079 6.5509 17.8399 6.5509H31.4097C33.5417 6.5509 35.5118 7.64509 36.5778 9.4213L43.3627 20.7263Z"
            fill="#F3C546"
          />
          <path
            d="M15.2646 8.5509C15.2646 7.44633 16.1601 6.5509 17.2646 6.5509H31.9263C33.0308 6.5509 33.9263 7.44633 33.9263 8.5509V31.1199C33.9263 31.9123 33.0486 32.3899 32.3832 31.9596L25.1376 27.2733C24.8071 27.0595 24.3819 27.0595 24.0514 27.2733L16.8078 31.9593C16.1425 32.3898 15.2646 31.9122 15.2646 31.1197V8.5509Z"
            fill="white"
          />
          <path
            d="M24.5957 8.99475V20.4457"
            stroke="#F3C546"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M17.751 6.5509V27.1746C17.751 27.5645 18.1775 27.8044 18.5107 27.6018L24.4028 24.0195C24.5631 23.9221 24.7646 23.9226 24.9244 24.0209L30.7366 27.5952C31.0698 27.8 31.4985 27.5604 31.4985 27.1693V6.5509"
            stroke="#F3C546"
            stroke-width="1.5"
          />
          <path
            d="M23.9319 36.2012C23.9319 36.2012 23.7067 36.1261 23.3939 36.0219C22.315 35.6623 21.4561 34.8034 21.0964 33.7245C20.9922 33.4116 20.9171 33.1864 20.9171 33.1864C20.8715 33.0498 20.7436 32.9576 20.5996 32.9576C20.4556 32.9576 20.3277 33.0498 20.2821 33.1864C20.2821 33.1864 20.207 33.4116 20.1029 33.7244C19.7432 34.8034 18.8843 35.6623 17.8054 36.0219C17.4925 36.1261 17.2673 36.2012 17.2673 36.2012C17.1307 36.2468 17.0386 36.3747 17.0386 36.5187C17.0386 36.6628 17.1307 36.7906 17.2674 36.8362C17.2674 36.8362 17.4926 36.9113 17.8053 37.0155C18.8843 37.3751 19.7432 38.234 20.1029 39.3129C20.207 39.6258 20.2821 39.851 20.2821 39.851C20.3277 39.9876 20.4556 40.0798 20.5996 40.0798C20.7436 40.0798 20.8716 39.9876 20.9171 39.851C20.9171 39.851 20.9923 39.6258 21.0964 39.313C21.4561 38.234 22.315 37.3751 23.3939 37.0155C23.7067 36.9113 23.9319 36.8362 23.9319 36.8362C24.0685 36.7906 24.1607 36.6628 24.1607 36.5187C24.1607 36.3747 24.0685 36.2468 23.9319 36.2012Z"
            fill="white"
          />
          <path
            d="M31.9822 36.2012C31.9822 36.2012 31.757 36.1261 31.4442 36.0219C30.3653 35.6623 29.5063 34.8034 29.1467 33.7245C29.0425 33.4116 28.9674 33.1864 28.9674 33.1864C28.9218 33.0498 28.7939 32.9576 28.6499 32.9576C28.5059 32.9576 28.378 33.0498 28.3324 33.1864C28.3324 33.1864 28.2573 33.4116 28.1532 33.7244C27.7935 34.8034 26.9346 35.6623 25.8557 36.0219C25.5428 36.1261 25.3176 36.2012 25.3176 36.2012C25.181 36.2468 25.0889 36.3747 25.0889 36.5187C25.0889 36.6628 25.181 36.7906 25.3177 36.8362C25.3177 36.8362 25.5429 36.9113 25.8556 37.0155C26.9346 37.3751 27.7935 38.234 28.1531 39.3129C28.2573 39.6258 28.3324 39.851 28.3324 39.851C28.378 39.9876 28.5059 40.0798 28.6499 40.0798C28.7939 40.0798 28.9219 39.9876 28.9674 39.851C28.9674 39.851 29.0426 39.6258 29.1467 39.313C29.5064 38.234 30.3653 37.3751 31.4442 37.0155C31.757 36.9113 31.9822 36.8362 31.9822 36.8362C32.1188 36.7906 32.211 36.6628 32.211 36.5187C32.211 36.3747 32.1188 36.2468 31.9822 36.2012Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default YellowBonusActivitySubscribers;
