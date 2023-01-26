export const fontStyle = (size?: number | string | null) => {
  return {
    fontFamily: "IBM Plex Mono",
    fontWeight: 700,
    fontSize: size || 13,
    letterSpacing: "-0.01em",
  };
};
