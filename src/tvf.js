import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Tvf = () => {
  return (
    <Card
      key={Sdata.id}
      simg={Sdata.simg}
      sname={Sdata.sname}
      stitle={Sdata.stitle}
      slink={Sdata.slink}
    />
  );
};

export default Tvf;
