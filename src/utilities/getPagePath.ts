import { PagePathEnum } from './../models/pagePath';

export function getPagePath() {
  const pathsArray = Object.entries(PagePathEnum).map((item) => ({
    label: [item[0]],
    href: item[1],
  }));
  return pathsArray;
}
