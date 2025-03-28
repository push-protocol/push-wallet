import { css } from "styled-components";
import { Box, Cross, Text, Tick } from "blocks";

const ConnectionSuccess = ({ onClose }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="spacing-xs"
      gap="spacing-sm"
      width="-webkit-fill-available"
      borderRadius="radius-md"
      backgroundColor="surface-primary"
      css={css`
        border-top: var(--border-xmd) solid var(--stroke-secondary);
      `}
    >
      <Box alignSelf="flex-end" cursor="pointer" onClick={() => onClose()}>
        <Cross size={16} color="icon-primary" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="surface-state-success-subtle"
        borderRadius="radius-sm"
        width="48px"
        height="48px"
        cursor="pointer"
      >
        <Tick size={32} color="icon-state-success-bold" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        gap="spacing-xxxs"
      >
        <Text variant="h3-semibold" color="text-primary">
          Logged in Successfully
        </Text>
        <Text variant="bs-regular" color="text-secondary">
          You can now return to the app to continue
        </Text>
      </Box>
      <Text variant="bs-regular" color="text-tertiary">
        Closing this window will log you out.
      </Text>
    </Box>
  );
};

export { ConnectionSuccess };
