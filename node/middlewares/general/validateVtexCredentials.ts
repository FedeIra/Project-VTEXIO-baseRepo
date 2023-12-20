// Middleware responsible for validating appKey and appToken:
const VTEX_APPKEY_HEADER = 'X-VTEX-API-AppKey'
const VTEX_APPTOKEN_HEADER = 'X-VTEX-API-AppToken'
const VTEX_AUTH_COOKIE = 'VtexIdclientAutCookie'

export async function validateVtexCredentials(
  ctx: Context,
  next: () => Promise<void>
) {
  const appKey: string = ctx.get(VTEX_APPKEY_HEADER)
  const appToken: string = ctx.get(VTEX_APPTOKEN_HEADER)
  const AuthCookie: string =
    ctx.get(VTEX_AUTH_COOKIE) ?? ctx.cookies.get(VTEX_AUTH_COOKIE)

  if (!appKey || !appToken) {
    if (!AuthCookie) {
      ctx.status = 401
      ctx.body = {
        title: 'Unauthorized',
        message: 'Unauthorized. Missing VTEX credentials.',
        host: ctx.request.host,
        path: ctx.request.path,
      }

      return
    }
  }

  await next()
}
