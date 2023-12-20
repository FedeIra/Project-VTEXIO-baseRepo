// Middleware responsible for handling errors:
export async function errorHandler(ctx: Context, next: () => Promise<void>) {
  const {
    vtex: { logger },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { cron_action },
  } = ctx

  try {
    if (cron_action) {
      ctx.status = 204

      return
    }

    await next()
  } catch (error) {
    logger.error(
      JSON.stringify({ message: error.message, path: error.path, error })
    )

    ctx.status = error.status || error.response?.status || 500
    ctx.body = {
      title: error?.title,
      messageError: 'Internal Server Error',
      host: error.request?.host,
      path: error.request?.path,
      messageData: error.response?.data,
      errorInfo: error?.errorInfo,
      vtexError: error?.vtexError,
      paymentStatus: 'denied',
    }
    ctx.app.emit('error', error, ctx)
  }
}
