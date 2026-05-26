'use client';

import React from 'react';
import moment from 'moment';

const TimeFormat = ({ time }: { time: string | Date }) => {
  return <span>{moment(time).format('MMM DD, YYYY')}</span>;
};

export default TimeFormat;
