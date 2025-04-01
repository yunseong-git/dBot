import { GetServerSideProps } from 'next';
import WhatEatHeader from '@/components/eat/WhatEatHeader';
import FoodDetail from '@/components/eat/FoodDetail';
import Keeplist from '@/components/eat/Keeplist';

export default function EatDetailPage({ food }: { food: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="flex-1">
        <WhatEatHeader />
        <FoodDetail food={food} />
      </div>
      <div className="w-full md:w-64">
        <Keeplist />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`http://localhost:3000/what/eat/${id}`);
  const food = await res.json();

  return {
    props: {
      food,
    },
  };
};