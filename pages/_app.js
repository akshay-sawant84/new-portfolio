/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '@/page-components/common/Header';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-opensans',
});

export default function App({ Component, pageProps }) {
	return (
		// <html lang="en" suppressHydrationWarning>
		// 	<body className="bg-white text-black antialiased dark:bg-black dark:text-white">
		<NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
			<div
				lang="en"
				className={`${openSans.variable} ${openSans.variable} font-sans`}
			>
				<Header />
				<Component {...pageProps} />
			</div>
		</NextThemesProvider>
		// 	</body>
		// </html>
	);
}
