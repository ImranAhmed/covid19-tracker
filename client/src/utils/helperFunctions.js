import React from 'react';

// Images
import UpArrow from '../assets/imgs/up_arrow.png';
import DownArrow from '../assets/imgs/down_arrow.png';
import LevelArrow from '../assets/imgs/level_arrow.png';

/* Compute delta of val1 to val2 and return a
correspping trend image, with classnames attached */
export const getDeltaTrendImg = (val1, val2, class_name) => {
  // Return null if either val is null or undefiend
  if (val1 === null || val1 === undefined) return null;
  if (val2 === null || val2 === undefined) return null;

  const delta = val1 - val2;

  if (delta > 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--upArrow`}
        src={UpArrow}
      />
    );
  else if (delta === 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--levelArrow`}
        src={LevelArrow}
      />
    );
  else if (delta < 0)
    return (
      <img
        className={`${class_name}__deltaSymbol cases--downArrow`}
        src={DownArrow}
      />
    );
};

/* Sorting options property */
export const sortOptions = [
  { label: 'Name (Ascending)', sortVal: 'name', direction: 'asc' },
  { label: 'Name (Descending)', sortVal: 'name', direction: 'desc' },
  {
    label: 'Cases today (Ascending)',
    sortVal: 'todayData.todayCases',
    direction: 'asc',
  },
  {
    label: 'Cases today (Descending)',
    sortVal: 'todayData.todayCases',
    direction: 'desc',
  },
  {
    label: 'Deaths today (Ascending)',
    sortVal: 'todayData.todayDeaths',
    direction: 'asc',
  },
  {
    label: 'Deaths today (Descending)',
    sortVal: 'todayData.todayDeaths',
    direction: 'desc',
  },
  {
    label: 'Cases yesterday (Ascending)',
    sortVal: 'yesterdayData.todayCases',
    direction: 'asc',
  },
  {
    label: 'Cases yesterday (Descending)',
    sortVal: 'yesterdayData.todayCases',
    direction: 'desc',
  },
  {
    label: 'Deaths yesterday (Ascending)',
    sortVal: 'yesterdayData.todayDeaths',
    direction: 'asc',
  },
  {
    label: 'Deaths yesterday (Descending)',
    sortVal: 'yesterdayData.todayDeaths',
    direction: 'desc',
  },
  {
    label: 'Cases total (Ascending)',
    sortVal: 'todayData.cases',
    direction: 'asc',
  },
  {
    label: 'Cases total (Descending)',
    sortVal: 'todayData.cases',
    direction: 'desc',
  },
  {
    label: 'Deaths total (Ascending)',
    sortVal: 'todayData.deaths',
    direction: 'asc',
  },
  {
    label: 'Deaths total (Descending)',
    sortVal: 'todayData.deaths',
    direction: 'desc',
  },
];
