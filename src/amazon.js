import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon = () => {
  return (
    <Card
      key={Sdata[8].id}
      simg={Sdata[8].simg}
      sname={Sdata[8].sname}
      stitle={Sdata[8].stitle}
      slink={Sdata[8].slink}
    />
  );
};
export default Amazon;
