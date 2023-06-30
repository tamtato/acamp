'use client';
import ListingCard from '@/components/common/ListingCard';
import { useEffect, useState } from 'react';

const ListingById = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => {
        setData(res.properties.find((property) => property.id === params.id));
      });
  }, [params.id]);

  return <ListingCard listing={data} />;
};

export default ListingById;
