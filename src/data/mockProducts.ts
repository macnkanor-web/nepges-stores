// Mock product data for demo store
import tshirtBlack from '@/assets/products/tshirt-black.jpg';
import jeansDenim from '@/assets/products/jeans-denim.jpg';
import sneakersWhite from '@/assets/products/sneakers-white.jpg';
import jacketLeather from '@/assets/products/jacket-leather.jpg';
import sunglassesBlack from '@/assets/products/sunglasses-black.jpg';
import watchSilver from '@/assets/products/watch-silver.jpg';
import hoodieBlack from '@/assets/products/hoodie-black.jpg';
import hoodieNavy from '@/assets/products/hoodie-navy.jpg';
import hoodieBurgundy from '@/assets/products/hoodie-burgundy.jpg';

export interface MockProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  tags: string[];
  price: number;
  currencyCode: string;
  image: string;
  images: string[];
  variants: Array<{
    id: string;
    title: string;
    price: number;
    availableForSale: boolean;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
  }>;
  options: Array<{
    name: string;
    values: string[];
  }>;
}

export const mockProducts: MockProduct[] = [
  {
    id: '1',
    title: 'Smartphone Pro',
    description: 'Professional grade smartphone with edge-to-edge display, advanced camera system, and lightning-fast performance. Perfect for photography enthusiasts and power users.',
    handle: 'smartphone-pro',
    tags: ['electronics', 'smartphones', 'featured', 'new-arrival'],
    price: 899.99,
    currencyCode: 'USD',
    image: '/src/assets/products/smartphone-pro.jpg',
    images: ['/src/assets/products/smartphone-pro.jpg'],
    variants: [
      {
        id: 'variant-1-1',
        title: '128GB / Black',
        price: 899.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Storage', value: '128GB' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-1-2',
        title: '256GB / Black',
        price: 999.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Storage', value: '256GB' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-1-3',
        title: '128GB / Silver',
        price: 899.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Storage', value: '128GB' },
          { name: 'Color', value: 'Silver' }
        ]
      }
    ],
    options: [
      { name: 'Storage', values: ['128GB', '256GB'] },
      { name: 'Color', values: ['Black', 'Silver'] }
    ]
  },
  {
    id: '2',
    title: 'Smartwatch Elite',
    description: 'Premium smartwatch with AMOLED display, comprehensive fitness tracking, and extended battery life. Track your health and stay connected in style.',
    handle: 'smartwatch-elite',
    tags: ['electronics', 'wearables', 'fitness', 'featured'],
    price: 349.99,
    currencyCode: 'USD',
    image: '/src/assets/products/smartwatch-elite.jpg',
    images: ['/src/assets/products/smartwatch-elite.jpg'],
    variants: [
      {
        id: 'variant-2-1',
        title: '42mm / Black',
        price: 349.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: '42mm' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-2-2',
        title: '46mm / Black',
        price: 399.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: '46mm' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['42mm', '46mm'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '3',
    title: 'Wireless Headphones Pro',
    description: 'Studio-quality wireless headphones with active noise cancellation, premium cushioning, and immersive sound. Experience audio like never before.',
    handle: 'headphones-pro',
    tags: ['electronics', 'audio', 'headphones', 'premium'],
    price: 299.99,
    currencyCode: 'USD',
    image: '/src/assets/products/headphones-pro.jpg',
    images: ['/src/assets/products/headphones-pro.jpg'],
    variants: [
      {
        id: 'variant-3-1',
        title: 'Black',
        price: 299.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '4',
    title: 'Ultra Thin Laptop',
    description: 'Sleek and powerful laptop with stunning display, all-day battery life, and ultra-portable design. Perfect for professionals on the go.',
    handle: 'laptop-ultra',
    tags: ['electronics', 'computers', 'laptops', 'featured', 'premium'],
    price: 1299.99,
    currencyCode: 'USD',
    image: '/src/assets/products/laptop-ultra.jpg',
    images: ['/src/assets/products/laptop-ultra.jpg'],
    variants: [
      {
        id: 'variant-4-1',
        title: '8GB RAM / 256GB SSD',
        price: 1299.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Configuration', value: '8GB RAM / 256GB SSD' }
        ]
      },
      {
        id: 'variant-4-2',
        title: '16GB RAM / 512GB SSD',
        price: 1599.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Configuration', value: '16GB RAM / 512GB SSD' }
        ]
      }
    ],
    options: [
      { name: 'Configuration', values: ['8GB RAM / 256GB SSD', '16GB RAM / 512GB SSD'] }
    ]
  },
  {
    id: '5',
    title: 'Wireless Earbuds',
    description: 'Compact wireless earbuds with charging case, crystal-clear sound, and comfortable fit. Perfect for music lovers and active lifestyles.',
    handle: 'earbuds-wireless',
    tags: ['electronics', 'audio', 'earbuds', 'new-arrival'],
    price: 149.99,
    currencyCode: 'USD',
    image: '/src/assets/products/earbuds-wireless.jpg',
    images: ['/src/assets/products/earbuds-wireless.jpg'],
    variants: [
      {
        id: 'variant-5-1',
        title: 'White',
        price: 149.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Color', value: 'White' }
        ]
      }
    ],
    options: [
      { name: 'Color', values: ['White'] }
    ]
  },
  {
    id: '6',
    title: 'Fitness Band',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and water resistance. Achieve your fitness goals with style.',
    handle: 'fitness-band',
    tags: ['electronics', 'wearables', 'fitness', 'health'],
    price: 79.99,
    currencyCode: 'USD',
    image: '/src/assets/products/fitness-band.jpg',
    images: ['/src/assets/products/fitness-band.jpg'],
    variants: [
      {
        id: 'variant-6-1',
        title: 'Small / Black',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Small' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-6-2',
        title: 'Medium / Black',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-6-3',
        title: 'Large / Black',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '7',
    title: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable cotton t-shirt with a classic fit. Perfect for everyday wear, this essential piece combines comfort with timeless style.',
    handle: 'tshirt-premium',
    tags: ['fashion', 'clothing', 'casual', 'new-arrival'],
    price: 29.99,
    currencyCode: 'USD',
    image: tshirtBlack,
    images: [tshirtBlack],
    variants: [
      {
        id: 'variant-7-1',
        title: 'Small / Black',
        price: 29.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Small' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-7-2',
        title: 'Medium / Black',
        price: 29.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-7-3',
        title: 'Large / Black',
        price: 29.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '8',
    title: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with perfect fit and durability. Crafted from premium denim fabric for all-day comfort and style.',
    handle: 'jeans-classic',
    tags: ['fashion', 'clothing', 'denim', 'featured'],
    price: 79.99,
    currencyCode: 'USD',
    image: jeansDenim,
    images: [jeansDenim],
    variants: [
      {
        id: 'variant-8-1',
        title: '30 / Blue',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Waist', value: '30' },
          { name: 'Color', value: 'Blue' }
        ]
      },
      {
        id: 'variant-8-2',
        title: '32 / Blue',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Waist', value: '32' },
          { name: 'Color', value: 'Blue' }
        ]
      },
      {
        id: 'variant-8-3',
        title: '34 / Blue',
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Waist', value: '34' },
          { name: 'Color', value: 'Blue' }
        ]
      }
    ],
    options: [
      { name: 'Waist', values: ['30', '32', '34'] },
      { name: 'Color', values: ['Blue'] }
    ]
  },
  {
    id: '9',
    title: 'Leather Sneakers',
    description: 'Minimalist white leather sneakers with premium craftsmanship. Versatile design pairs perfectly with any outfit.',
    handle: 'sneakers-leather',
    tags: ['fashion', 'footwear', 'sneakers', 'premium'],
    price: 89.99,
    currencyCode: 'USD',
    image: sneakersWhite,
    images: [sneakersWhite],
    variants: [
      {
        id: 'variant-9-1',
        title: '8 / White',
        price: 89.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: '8' },
          { name: 'Color', value: 'White' }
        ]
      },
      {
        id: 'variant-9-2',
        title: '9 / White',
        price: 89.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: '9' },
          { name: 'Color', value: 'White' }
        ]
      },
      {
        id: 'variant-9-3',
        title: '10 / White',
        price: 89.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: '10' },
          { name: 'Color', value: 'White' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['8', '9', '10'] },
      { name: 'Color', values: ['White'] }
    ]
  },
  {
    id: '10',
    title: 'Leather Jacket',
    description: 'Premium leather jacket with classic biker design. Crafted from genuine leather for exceptional quality and timeless appeal.',
    handle: 'jacket-leather',
    tags: ['fashion', 'clothing', 'outerwear', 'premium', 'featured'],
    price: 299.99,
    currencyCode: 'USD',
    image: jacketLeather,
    images: [jacketLeather],
    variants: [
      {
        id: 'variant-10-1',
        title: 'Medium / Black',
        price: 299.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-10-2',
        title: 'Large / Black',
        price: 299.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Medium', 'Large'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '11',
    title: 'Classic Sunglasses',
    description: 'Timeless sunglasses with UV protection and sleek design. Essential accessory for sunny days and elevated style.',
    handle: 'sunglasses-classic',
    tags: ['fashion', 'accessories', 'eyewear', 'featured'],
    price: 49.99,
    currencyCode: 'USD',
    image: sunglassesBlack,
    images: [sunglassesBlack],
    variants: [
      {
        id: 'variant-11-1',
        title: 'One Size / Black',
        price: 49.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'One Size' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['One Size'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '12',
    title: 'Classic Wristwatch',
    description: 'Elegant silver wristwatch with precision movement. Sophisticated timepiece that complements any outfit with refined style.',
    handle: 'watch-classic',
    tags: ['fashion', 'accessories', 'watches', 'premium'],
    price: 199.99,
    currencyCode: 'USD',
    image: watchSilver,
    images: [watchSilver],
    variants: [
      {
        id: 'variant-12-1',
        title: 'One Size / Silver',
        price: 199.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'One Size' },
          { name: 'Color', value: 'Silver' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['One Size'] },
      { name: 'Color', values: ['Silver'] }
    ]
  },
  {
    id: '13',
    title: 'Premium Hoodie - Black',
    description: 'Ultra-soft premium hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for layering or lounging in style.',
    handle: 'hoodie-black',
    tags: ['fashion', 'clothing', 'hoodies', 'new-arrival'],
    price: 59.99,
    currencyCode: 'USD',
    image: hoodieBlack,
    images: [hoodieBlack],
    variants: [
      {
        id: 'variant-13-1',
        title: 'Small / Black',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Small' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-13-2',
        title: 'Medium / Black',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Black' }
        ]
      },
      {
        id: 'variant-13-3',
        title: 'Large / Black',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Black' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '14',
    title: 'Premium Hoodie - Navy',
    description: 'Classic navy blue hoodie crafted from premium cotton blend. Features ribbed cuffs and hem for a comfortable, snug fit.',
    handle: 'hoodie-navy',
    tags: ['fashion', 'clothing', 'hoodies', 'featured'],
    price: 59.99,
    currencyCode: 'USD',
    image: hoodieNavy,
    images: [hoodieNavy],
    variants: [
      {
        id: 'variant-14-1',
        title: 'Small / Navy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Small' },
          { name: 'Color', value: 'Navy' }
        ]
      },
      {
        id: 'variant-14-2',
        title: 'Medium / Navy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Navy' }
        ]
      },
      {
        id: 'variant-14-3',
        title: 'Large / Navy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Navy' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Navy'] }
    ]
  },
  {
    id: '15',
    title: 'Premium Hoodie - Burgundy',
    description: 'Bold burgundy hoodie with a cozy fleece interior. Stand out in style with this rich, eye-catching color.',
    handle: 'hoodie-burgundy',
    tags: ['fashion', 'clothing', 'hoodies', 'premium'],
    price: 59.99,
    currencyCode: 'USD',
    image: hoodieBurgundy,
    images: [hoodieBurgundy],
    variants: [
      {
        id: 'variant-15-1',
        title: 'Small / Burgundy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Small' },
          { name: 'Color', value: 'Burgundy' }
        ]
      },
      {
        id: 'variant-15-2',
        title: 'Medium / Burgundy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Medium' },
          { name: 'Color', value: 'Burgundy' }
        ]
      },
      {
        id: 'variant-15-3',
        title: 'Large / Burgundy',
        price: 59.99,
        availableForSale: true,
        selectedOptions: [
          { name: 'Size', value: 'Large' },
          { name: 'Color', value: 'Burgundy' }
        ]
      }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Burgundy'] }
    ]
  }
];
