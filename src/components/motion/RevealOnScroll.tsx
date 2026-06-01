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
        transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
        filter: isInView ? "blur(0)" : "blur(4px)",
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, filter 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
        willChange: "opacity, transform, filter",
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
