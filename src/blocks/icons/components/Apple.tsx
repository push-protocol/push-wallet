import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const Apple: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Apple"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 25 25"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_11450_3938)">
            <path
              d="M17.1192 0.147949C17.1751 0.147949 17.2309 0.147949 17.2899 0.147949C17.4269 1.84048 16.7809 3.10514 15.9958 4.02096C15.2254 4.93045 14.1704 5.81255 12.4642 5.67871C12.3504 4.01042 12.9975 2.83956 13.7816 1.92584C14.5087 1.07431 15.8419 0.31657 17.1192 0.147949Z"
              fill="currentColor"
            />
            <path
              d="M22.2841 17.7646C22.2841 17.7814 22.2841 17.7962 22.2841 17.812C21.8046 19.2642 21.1206 20.5089 20.2859 21.6639C19.524 22.7125 18.5903 24.1237 16.923 24.1237C15.4824 24.1237 14.5254 23.1973 13.049 23.172C11.4871 23.1467 10.6282 23.9466 9.20019 24.1479C9.03684 24.1479 8.87348 24.1479 8.71329 24.1479C7.66468 23.9962 6.81842 23.1657 6.2019 22.4175C4.38396 20.2064 2.97914 17.3504 2.71777 13.6955C2.71777 13.3372 2.71777 12.98 2.71777 12.6216C2.82843 10.0059 4.09941 7.87919 5.78878 6.84849C6.68036 6.30047 7.90602 5.83361 9.2708 6.04227C9.8557 6.13291 10.4532 6.33314 10.977 6.53127C11.4734 6.72203 12.0941 7.06032 12.6822 7.04241C13.0806 7.03081 13.4768 6.8232 13.8784 6.67671C15.0545 6.252 16.2074 5.7651 17.7271 5.9938C19.5535 6.26991 20.8498 7.0814 21.6507 8.33341C20.1057 9.31668 18.8843 10.7984 19.093 13.3288C19.2784 15.6273 20.6148 16.9721 22.2841 17.7646Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_11450_3938">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.147949)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Apple;