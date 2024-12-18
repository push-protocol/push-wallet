import { FC, ReactNode } from "react";
import { Box } from "../../blocks";
import { css } from "styled-components";
import React from "react";


type ContentLayoutProps = {
  children: ReactNode;
  footer?: ReactNode;
};

const ContentLayout: FC<ContentLayoutProps> = ({ children, footer }) => {
  return (
    <Box
      alignItems="center"
      alignSelf="center"
      backgroundColor="surface-secondary"
      display="flex"
      gap="spacing-lg"
      flexDirection="column"
      justifyContent="center"
      width="100%"
      height="100vh"
      css={css`
        flex: initial;
        margin: 0 0 auto 0;
      `}
    >
      {children}
      {footer}
    </Box>
  );
};

export { ContentLayout };
