import React from 'react';
import { getOficeInfo, getProductInfo } from 'services/apiProducts';

export default function Departments() {
  getProductInfo().then(data => console.log('TTN', data));
  getOficeInfo().then(data => console.log('ofice', data));
  return <div>Departments</div>;
}
