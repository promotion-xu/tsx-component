export interface RouterItem {
  title?: string,
  name?: string,
  component?: any,
  path: string,
  icon?: string,
  children?: RouterItem[],
  meta?: any,
  hidden?: boolean,
  redirect?: string,
  isMenu?: boolean,
}