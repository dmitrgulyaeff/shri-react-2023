import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header/';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/redux/StoreProvider';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata = {
  title: 'Билетопоиск',
  description: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <div
            id="portal-selectors"
            style={{ zIndex: 1, position: 'fixed' }}
          ></div>
          <div
            id="portal-popups"
            style={{ zIndex: 2, position: 'absolute' }}
          ></div>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
