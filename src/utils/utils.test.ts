import { CartItem, Product } from '@/features/typings';
import { calculateCartTotal, formatPrice } from './utils';

describe('calculateCartTotal', () => {
    const availableProduct: Product = {
        id: "1",
        title: "Product A",
        description: "Available product",
        image: "a.jpg",
        price: 10,
        status: "available",
      };
    
      const anotherAvailableProduct: Product = {
        ...availableProduct,
        id: "2",
        title: "Product B",
        price: 5,
      };
    
      const unavailableProduct: Product = {
        ...availableProduct,
        id: "3",
        title: "Product C",
        status: "unavailable",
        price: 999,
      };

  it('should return 0 for an empty cart', () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  it('should correctly calculate total for available items', () => {
    const cart: CartItem[] = [
      { product: availableProduct, quantity: 2 },
      { product: anotherAvailableProduct, quantity: 1 },
    ];
    expect(calculateCartTotal(cart)).toBe(25);
  });

  it('should ignore unavailable products', () => {
    const cart: CartItem[] = [
      { product: unavailableProduct, quantity: 10 },
      { product: availableProduct, quantity: 1 },
    ];
    expect(calculateCartTotal(cart)).toBe(10);
  });

  it('should handle mixed cart correctly', () => {
    const cart: CartItem[] = [
      { product: availableProduct, quantity: 1 },
      { product: unavailableProduct, quantity: 1 },
    ];
    expect(calculateCartTotal(cart)).toBe(10);
  });
});

describe('formatPrice', () => {
  it('should format whole numbers correctly', () => {
    expect(formatPrice(20)).toBe('$20.00');
  });

  it('should format decimal numbers correctly', () => {
    expect(formatPrice(19.9)).toBe('$19.90');
    expect(formatPrice(19.999)).toBe('$20.00');
  });

  it('should format zero correctly', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });

  it('should handle large numbers', () => {
    expect(formatPrice(123456.789)).toBe('$123456.79');
  });
});
