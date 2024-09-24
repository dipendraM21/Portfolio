export function formatPath(path: string) {
  // Remove the leading slash using slice
  let formatted = path.startsWith("/") ? path.slice(1) : path;

  // Capitalize the first letter
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return formatted;
}
