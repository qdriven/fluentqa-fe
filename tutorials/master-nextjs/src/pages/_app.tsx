import '@/styles/globals.css'
import type { AppProps } from 'next/app'
/**
 * App loading EntryPoint
 * @param param0 
 * @returns 
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
