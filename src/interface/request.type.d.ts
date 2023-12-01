declare interface Result<T = any> {
  returnCode: number,
  returnMsg: string,
  body: T
}
