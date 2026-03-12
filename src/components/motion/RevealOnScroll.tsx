import { Box, type BoxProps } from "@mui/material";
import { useInView } from "../../hooks/useInView";

interface RevealOnScrollProps extends BoxProps {
  delayMs?: number;
}

export function RevealOnScroll({ children, delayMs = 0, sx, ...boxProps }: RevealOnScrollProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 400ms ease-out ${delayMs}ms, transform 400ms ease-out ${delayMs}ms`,
        willChange: "opacity, transform",
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}

