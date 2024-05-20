import Hero from '@/components/hero/hero';
import Cards from '@/components/cards';
import { getData } from '@/utils/getData';

export default async function Home() {

  const data = await getData();

  return (
    <>
      <Hero />
      <Cards data={data} />
    </>
  );
}
