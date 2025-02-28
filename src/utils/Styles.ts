export const getBackgroundColor = (color: string) => {
  switch (color) {
    case "transparent":
      return "bg-transparent hover:bg-transparent";
    case "primary":
      return "bg-primary hover:bg-primary/80";
    case "secondary":
      return "bg-secondary hover:bg-secondary/80";
    case "warning":
      return "bg-warning hover:bg-warning/80";
    case "danger":
      return "bg-danger hover:bg-danger/80";
    default:
      return "bg-primary hover:bg-primary/80";
  }
};

export const getTextColor = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary hover:text-primary/80 hover:border-primary/80";
    case "secondary":
      return "text-secondary hover:text-secondary/80 hover:border-secondary/80";
    case "warning":
      return "text-warning hover:text-warning/80 hover:border-warning/80";
    case "danger":
      return "text-danger hover:text-danger/80 hover:border-danger/80";
    default:
      return "text-white hover:text-white/80 hover:border-white/80";
  }
};
