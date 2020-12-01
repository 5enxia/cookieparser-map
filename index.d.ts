export default function(cookie: string = ''): Map<string, string> {
  const parsedCookie: Map<string, string> = new Map<string, string>()
  cookie.split('; ').forEach((value: string) => {
    const splited: Array<string> = value.split("=")
    parsedCookie.set(splited[0], splited[1])
  })
  return parsedCookie
}