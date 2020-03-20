export const ELECTRONIC_PRODUCTS = [
  {
    id: 10,
    categoryId: 1,
    name: 'Laptop',
    description: 'Super Ultra Laptop'
  },
  {
    id: 11,
    categoryId: 1,
    name: 'iPad',
    description: 'Latest iPad'
  },
  {
    id: 12,
    categoryId: 1,
    name: 'iPhone',
    description: 'Brand new iPhone'
  }
];

export const FASHION_PRODUCTS = [
  {
    id: 20,
    categoryId: 2,
    name: 'Dress',
    description: 'Every girl wants it'
  },
  {
    id: 21,
    categoryId: 2,
    name: 'T-shirt',
    description: 'Every boy wants it'
  }
];

export const ALL_PRODUCTS = [ ...ELECTRONIC_PRODUCTS, ...FASHION_PRODUCTS ];
