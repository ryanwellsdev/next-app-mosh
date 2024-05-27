export { default } from 'next-auth/middleware'

export const config = {
    // * means zero or more parameters
    // + 1 or more parameters
    // ?: zero or one
    // typicallly a matcher: ['/dashboard/:path*'] for secure dashboard
    matcher: ['/dashboard/:path*']
}