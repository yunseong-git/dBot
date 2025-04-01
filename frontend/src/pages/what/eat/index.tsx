import WhatEatHeader from '@/components/eat/WhatEatHeader';
import Keeplist from '@/components/eat/Keeplist';

export default function WhatEatIndexPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="flex-1">
        <WhatEatHeader />
      </div>
      <div className="w-full md:w-64">
        <Keeplist />
      </div>
    </div>
  );
}