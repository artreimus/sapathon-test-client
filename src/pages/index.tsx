import { Inter } from 'next/font/google';
import InvoiceForm from '@/components/invoice/Form';
import Invoice from '@/components/invoice';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Invoice />
    </main>
  );
}
