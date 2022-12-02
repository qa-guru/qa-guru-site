import React from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";

const Logo: React.FC = () => {
  return (
    <IconButton>
      <Box
        sx={{
          height: { md: "31px" },
          width: { xs: "90px", md: "183px" },
          justifyContent: "space-between",
        }}
      >
        <svg
          viewBox="0 0 183 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_14_19)">
            <path
              d="M91.046 9.60715C91.7619 10.391 92.2174 11.4599 92.1524 12.5288C92.1524 13.6689 91.7619 14.7378 91.046 15.5216C90.3301 16.3055 89.354 16.733 88.3778 16.733C87.3365 16.733 86.3603 16.3055 85.6444 15.5216C84.9286 14.7378 84.473 13.6689 84.5381 12.5288C84.5381 11.3886 84.9286 10.3197 85.6444 9.60715C87.1413 7.96819 89.5492 7.96819 91.046 9.60715C91.046 9.60715 91.046 9.53589 91.046 9.60715Z"
              fill="#565657"
            />
            <path
              d="M0 23.2887V16.5191L9.95715 13.0274L0 9.53574V2.8374L16.2698 9.74952V16.3766L0 23.2887Z"
              fill="#565657"
            />
            <path
              d="M16.1397 29.7735V25.2842H36.4445V29.7735H16.1397Z"
              fill="#565657"
            />
            <path
              d="M45.3603 24.5C42.627 24.215 40.0889 22.7898 38.3317 20.5095C36.5746 18.3005 35.5984 15.4501 35.5984 12.5285C35.5333 9.32184 36.7047 6.2577 38.7873 4.04868C40.9349 1.69713 43.8635 0.414469 46.9222 0.485728C49.9809 0.414469 52.9095 1.69713 55.0571 4.04868C57.1397 6.2577 58.3111 9.3931 58.246 12.5997C58.246 14.88 57.6603 17.0891 56.554 19.0131C55.4476 20.937 53.8857 22.4335 52.0635 23.3598C52.7143 24.215 53.6905 24.6425 54.6667 24.5713C55.5778 24.5713 56.4238 24.3575 57.2048 23.8587V29.7019C56.0984 30.2007 54.8619 30.4857 53.6254 30.4857C50.8921 30.4857 48.2889 29.0606 46.727 26.5665L45.3603 24.5ZM46.9222 18.1579C48.2238 18.2292 49.3952 17.6591 50.3063 16.5902C51.2175 15.4501 51.673 14.0249 51.6079 12.5997C51.673 11.1746 51.2175 9.67813 50.3063 8.60925C48.5492 6.54274 45.6857 6.47148 43.7984 8.39547C43.7333 8.46673 43.6682 8.53799 43.6032 8.60925C42.6921 9.67813 42.2365 11.1033 42.3016 12.5997C42.2365 14.0962 42.6921 15.5214 43.6032 16.5902C44.4492 17.5879 45.6857 18.1579 46.9222 18.1579Z"
              fill="#2CCCA6"
            />
            <path
              d="M58.7667 24.1439L67.4873 0.770996H73.6698L82.3905 24.1439H75.4921L73.9952 19.7971H67.0317L65.4698 24.1439H58.7667ZM68.919 14.4527H72.0429L70.481 8.96577L68.919 14.4527Z"
              fill="#2CCCA6"
            />
            <path
              d="M99.246 21.2222C96.9682 19.0132 95.7317 15.8066 95.8619 12.5287C95.7968 9.25075 97.0333 6.0441 99.3111 3.83507C101.654 1.55479 104.778 0.343385 107.967 0.485903C108.813 0.485903 109.724 0.557162 110.57 0.699679C111.156 0.842197 111.741 0.984715 112.327 1.19849C112.717 1.34101 113.303 1.62604 114.019 1.91108V8.4669C108.357 5.26025 102.5 7.39801 102.695 12.6712C102.5 15.664 104.583 18.2294 107.251 18.4431C107.446 18.4431 107.576 18.4431 107.771 18.4431C108.683 18.5144 109.529 18.3006 110.309 17.8018V10.6759H116.883V21.151C115.841 22.2911 114.54 23.1462 113.173 23.645C111.481 24.3576 109.659 24.7139 107.836 24.6427C104.517 24.7139 101.524 23.5025 99.246 21.2222Z"
              fill="#565657"
            />
            <path
              d="M119.16 0.913574H125.668V14.524C125.668 17.0181 127.035 18.087 128.857 18.087C130.68 18.087 131.981 17.0181 131.981 14.524V0.913574H138.489V14.524C138.489 17.7307 137.578 20.2247 135.756 22.0062C133.868 23.7877 131.395 24.7141 128.857 24.6428C126.319 24.7141 123.846 23.7877 121.959 22.0062C120.137 20.2247 119.226 17.7307 119.226 14.524L119.16 0.913574Z"
              fill="#565657"
            />
            <path
              d="M162.438 24.1439H154.824L149.162 15.8779H148.251V24.1439H141.743V0.913516H151.96C154.043 0.770998 156.125 1.55485 157.752 3.05128C159.184 4.4052 159.965 6.32919 159.965 8.3957C159.965 11.2461 158.468 13.8826 156.06 15.094L162.438 24.1439ZM151.244 10.676C152.481 10.676 153.262 9.9634 153.262 8.752C153.262 7.54059 152.416 6.89926 151.244 6.89926H148.251V10.676H151.244Z"
              fill="#565657"
            />
            <path
              d="M162.894 0.913574H169.402V14.524C169.402 17.0181 170.768 18.087 172.591 18.087C174.413 18.087 175.714 17.0181 175.714 14.524V0.913574H182.222V14.524C182.222 17.7307 181.311 20.2247 179.489 22.0062C177.537 23.7877 175.129 24.7141 172.591 24.6428C170.053 24.7141 167.58 23.7877 165.692 22.0062C163.87 20.2247 162.959 17.7307 162.959 14.524V0.913574H162.894Z"
              fill="#565657"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_19">
              <rect
                width="182.222"
                height="30"
                fill="white"
                transform="translate(0 0.48584)"
              />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </IconButton>
  );
};

export default Logo;
