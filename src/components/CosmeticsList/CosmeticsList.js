import React from 'react';
import items from '../../api/api.json';
import { CosmeticsCard } from '../CosmeticsCard/CosmeticsCard';
import './CosmeticsList.scss';

export const CosmeticsList = () => (
  <ul className="list">
    {items.map(item => (
      <li>
        <CosmeticsCard item={item} />
      </li>
    ))}
  </ul>
);
