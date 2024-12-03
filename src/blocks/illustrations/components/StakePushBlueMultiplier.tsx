import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const StakePushBlueMultiplier: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="StakePushBlueMultiplier"
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
            d="M3.92871 11.4906C3.92871 7.5265 7.14222 4.31299 11.1063 4.31299H37.125C41.089 4.31299 44.3025 7.5265 44.3025 11.4906V28.0045C44.3025 30.2919 43.2123 32.4423 41.3672 33.7942L28.3005 43.3686C27.1316 44.2251 25.7202 44.6868 24.271 44.6868C22.8432 44.6868 21.4513 44.2385 20.2919 43.4051L6.91704 33.7914C5.04094 32.4429 3.92871 30.2737 3.92871 27.9632V11.4906Z"
            fill="black"
          />
          <path
            d="M3.92871 14.0794C3.92871 10.1154 7.14222 6.90186 11.1063 6.90186H37.125C41.089 6.90186 44.3025 10.1154 44.3025 14.0794V30.5934C44.3025 32.8807 43.2123 35.0311 41.3672 36.3831L28.3005 45.9574C27.1316 46.8139 25.7202 47.2757 24.271 47.2757C22.8432 47.2757 21.4513 46.8274 20.2919 45.994L6.91704 36.3803C5.04094 35.0318 3.92871 32.8626 3.92871 30.5521V14.0794Z"
            fill="#6A88FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1064 0.5H37.1251C43.195 0.5 48.1157 5.42068 48.1157 11.4907V28.0046C48.1157 31.5071 46.4463 34.7999 43.6211 36.8701L30.5543 46.4444C28.7316 47.78 26.5308 48.5 24.2711 48.5C22.0447 48.5 19.8744 47.8009 18.0665 46.5014L4.69161 36.8877C1.81882 34.8228 0.115723 31.5012 0.115723 27.9633V11.4907C0.115723 5.42069 5.0364 0.5 11.1064 0.5ZM11.1064 4.31308C7.14231 4.31308 3.92881 7.5266 3.92881 11.4907V27.9633C3.92881 30.2738 5.04104 32.443 6.91714 33.7915L20.292 43.4052C21.4514 44.2386 22.8433 44.6869 24.2711 44.6869C25.7203 44.6869 27.1317 44.2252 28.3006 43.3687L41.3673 33.7943C43.2124 32.4424 44.3026 30.292 44.3026 28.0046V11.4907C44.3026 7.52659 41.0891 4.31308 37.1251 4.31308H11.1064Z"
            fill="#6A88FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.3084 44.3753C25.653 44.5805 24.9664 44.6868 24.271 44.6868C22.8432 44.6868 21.4514 44.2385 20.2919 43.4051L8.08301 34.6295V19.3208H26.3084V44.3753Z"
            fill="url(#paint0_linear_8454_17763)"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.7958 34.213L28.8877 42.9384V23.3628H40.7958V34.213Z"
            fill="url(#paint1_linear_8454_17763)"
            fill-opacity="0.6"
          />
          <path
            d="M25.7226 18.6388C25.7226 18.6388 25.1464 18.4465 24.3459 18.18C21.5849 17.2596 19.387 15.0618 18.4668 12.301C18.2002 11.5003 18.0079 10.924 18.0079 10.924C17.8913 10.5744 17.564 10.3386 17.1955 10.3386C16.8269 10.3386 16.4997 10.5745 16.383 10.9241C16.383 10.9241 16.1909 11.5004 15.9243 12.3007C15.004 15.0617 12.8062 17.2596 10.0453 18.1799C9.24468 18.4465 8.66841 18.6388 8.66841 18.6388C8.31881 18.7554 8.08301 19.0826 8.08301 19.4512C8.08301 19.8198 8.31887 20.147 8.66847 20.2636C8.66847 20.2636 9.24474 20.4558 10.0451 20.7223C12.8061 21.6427 15.004 23.8405 15.9243 26.6013C16.1909 27.4019 16.383 27.9782 16.383 27.9782C16.4997 28.3278 16.8269 28.5637 17.1955 28.5637C17.564 28.5637 17.8914 28.3279 18.0079 27.9783C18.0079 27.9783 18.2002 27.402 18.4668 26.6016C19.3871 23.8406 21.5849 21.6427 24.3458 20.7224C25.1464 20.4558 25.7226 20.2636 25.7226 20.2636C26.0722 20.147 26.3081 19.8198 26.3081 19.4512C26.3081 19.0826 26.0722 18.7554 25.7226 18.6388Z"
            fill="white"
          />
          <path
            d="M40.4134 22.8322C40.4134 22.8322 40.0368 22.7066 39.5138 22.5324C37.7098 21.9311 36.2737 20.495 35.6724 18.6911C35.4982 18.168 35.3726 17.7914 35.3726 17.7914C35.2964 17.563 35.0826 17.4089 34.8417 17.4089C34.6009 17.4089 34.3871 17.563 34.3109 17.7915C34.3109 17.7915 34.1853 18.168 34.0112 18.691C33.4099 20.495 31.9738 21.9311 30.1698 22.5324C29.6467 22.7066 29.2702 22.8322 29.2702 22.8322C29.0418 22.9084 28.8877 23.1222 28.8877 23.3631C28.8877 23.6039 29.0418 23.8177 29.2702 23.8939C29.2702 23.8939 29.6468 24.0195 30.1697 24.1936C31.9737 24.7949 33.4099 26.231 34.0112 28.0349C34.1853 28.558 34.3109 28.9346 34.3109 28.9346C34.3871 29.163 34.6009 29.3171 34.8417 29.3171H34.8418C35.0826 29.3171 35.2964 29.163 35.3726 28.9346C35.3726 28.9346 35.4983 28.5581 35.6724 28.0351C36.2737 26.2311 37.7098 24.7949 39.5137 24.1936C40.0368 24.0195 40.4134 23.8939 40.4134 23.8939C40.6418 23.8177 40.7959 23.6039 40.7959 23.3631C40.7959 23.1222 40.6418 22.9084 40.4134 22.8322Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8454_17763"
              x1="17.1957"
              y1="19.3208"
              x2="17.1957"
              y2="44.6868"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A9FFEE" />
              <stop
                offset="1"
                stop-color="white"
                stop-opacity="0"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8454_17763"
              x1="34.8417"
              y1="23.3628"
              x2="34.8417"
              y2="42.9384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A9FFEE" />
              <stop
                offset="1"
                stop-color="white"
                stop-opacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default StakePushBlueMultiplier;