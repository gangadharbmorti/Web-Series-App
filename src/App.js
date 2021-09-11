import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const App = () => (
  <>
    <h1 className='heading'>Best Web Series</h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          simg={val.simg}
          sname={val.sname}
          stitle={val.stitle}
          slink={val.slink}
        />
      );
    })}
  </>
);

export default App;
