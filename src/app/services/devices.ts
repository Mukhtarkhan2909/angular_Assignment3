export interface DeviceDetail {
  name: string;
  price: number;
  type: string;
}
export const iPhone: DeviceDetail[] = [
  { name: 'iPhone 6', price: 110.99, type: 'phone' },
  { name: 'iPhone 7', price: 549.99, type: 'phone' },
  { name: 'iPhone 8', price: 319.99, type: 'phone' },
  { name: 'iPhone 9', price: 799.99, type: 'phone' },
  { name: 'iPhone 10', price: 639.99, type: 'phone' },
  { name: 'iPhone 11', price: 849.99, type: 'phone' }
];
export const mac: DeviceDetail[] = [
  { name: 'MacBook Air i3', price: 999.99, type: 'laptop' },
  { name: 'MacBook Air M1', price: 1299.99, type: 'laptop' },
  { name: 'MacBook Air i7', price: 1499.99, type: 'laptop' },
  { name: 'MacBook Pro M1', price: 1699.99, type: 'laptop' },
  { name: 'MacBook Pro 13', price: 1899.99, type: 'laptop' },
  { name: 'MacBook Pro 16', price: 2099.99, type: 'laptop' },
];
export const watch: DeviceDetail[] = [
  { name: 'Apple Watch Series 3', price: 199.99, type: 'watch' },
  { name: 'Apple Watch SE', price: 309.99, type: 'watch' },
  { name: 'Apple Watch Series 6', price: 499.99, type: 'watch' }
];
