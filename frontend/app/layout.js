import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'KRISH KIDS ISLAND | Abacus Academy - Unlock Mental Math Superpowers',
  description: 'KRISH KIDS ISLAND is a premier abacus learning academy for children ages 4-14. Build mental math skills, concentration, and confidence through proven abacus techniques in Chennai.',
  keywords: 'abacus academy, mental math, kids abacus classes, Chennai, KRISH KIDS ISLAND, abacus training, mental arithmetic',
  openGraph: {
    title: 'KRISH KIDS ISLAND | Abacus Academy',
    description: 'Unlock your child\'s mental math superpowers at KRISH KIDS ISLAND Abacus Academy.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
