import React from 'react';
import { getOficeInfo } from 'services/apiProducts';

export default function Departments() {
  // getProductInfo().then(data => console.log(data));
  getOficeInfo().then(data => console.log('ofice', data));
  return <div>Departments</div>;
}
