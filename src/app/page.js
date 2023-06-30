'use client';
import SmallListingCard from '@/components/common/SmallListingCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([null, null, null]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((res) => setData(res.properties));
  }, []);

  return (
    <div className="flex flex-col pt-10">
      {data.map((listing, i) => {
        return (
          <div key={i} className={` ${i !== 2 ? 'pb-4/5' : ''}`}>
            <SmallListingCard listing={listing} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
