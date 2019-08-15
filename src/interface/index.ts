export interface RouterItem {
  title?: string,
  name?: string,
  component?: any,
  path?: string,
  icon?: string,
  meta?: any,
  hidden?: boolean,
  redirect?: string,
  isMenu?: boolean,
  subs?: RouterItem[]
}