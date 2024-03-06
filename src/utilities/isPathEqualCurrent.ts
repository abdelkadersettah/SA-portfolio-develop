export function isPathEqualCurrent(pathName: string, currentUrl: string) {
  return (
    pathName.replaceAll('/', '').toLowerCase() ===
    currentUrl.replaceAll('/', '').toLowerCase()
  );
}
