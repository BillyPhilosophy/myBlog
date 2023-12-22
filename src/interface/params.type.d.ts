declare global {
  interface LoginParams{
    username: string,
    password: string
  }
  interface RegisterParams{
    username: string,
    password: string,
    nickname?: string
  }
}
export {}
