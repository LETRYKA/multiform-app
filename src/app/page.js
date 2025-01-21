import Form from "@/components/Form"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', // Optional for CSS variable usage
});

export default function Home() {
  return (
    <Form />
  );
}
