// Middleware responsible for handling cron requests:
export async function cronFilter(ctx: Context, next: () => Promise<void>) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { cron_action },
  } = ctx

  if (cron_action) {
    ctx.status = 204

    return
  }

  await next()
}
