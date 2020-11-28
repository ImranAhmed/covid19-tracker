import React from 'react';
import NumberFormat from 'react-number-format';

const DeathsYesterday = ({ yesterdayDeaths }) => {
  return (
    <div className="deaths deaths--yesterday">
      <NumberFormat
        className="deaths__statsNumber"
        value={yesterdayDeaths}
        thousandSeparator={true}
        displayType={'text'}
      />
    </div>
  );
};

export default DeathsYesterday;
