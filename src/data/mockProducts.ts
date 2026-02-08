// Mock product data for demo store - Premium Product Catalog
// ES6 imports for all product images

// Existing images
import tshirtBlack from '@/assets/products/tshirt-black.jpg';
import jeansDenim from '@/assets/products/jeans-denim.jpg';
import sneakersWhite from '@/assets/products/sneakers-white.jpg';
import jacketLeather from '@/assets/products/jacket-leather.jpg';
import sunglassesBlack from '@/assets/products/sunglasses-black.jpg';
import watchSilver from '@/assets/products/watch-silver.jpg';
import hoodieBlack from '@/assets/products/hoodie-black.jpg';
import hoodieNavy from '@/assets/products/hoodie-navy.jpg';
import hoodieBurgundy from '@/assets/products/hoodie-burgundy.jpg';
import macbookPro from '@/assets/products/macbook-pro.jpg';
import hpElite from '@/assets/products/hp-elite.jpg';
import hpProbook from '@/assets/products/hp-probook.jpg';
import smartphonePro from '@/assets/products/smartphone-pro.jpg';
import smartwatchElite from '@/assets/products/smartwatch-elite.jpg';
import headphonesPro from '@/assets/products/headphones-pro.jpg';
import laptopUltra from '@/assets/products/laptop-ultra.jpg';
import earbudsWireless from '@/assets/products/earbuds-wireless.jpg';
import fitnessBand from '@/assets/products/fitness-band.jpg';

// New product images - Phones
import iphone16Pro from '@/assets/products/iphone-16-pro.jpg';
import iphone15 from '@/assets/products/iphone-15.jpg';
import pixel9Pro from '@/assets/products/pixel-9-pro.jpg';
import samsungS24Ultra from '@/assets/products/samsung-s24-ultra.jpg';
import samsungZFold from '@/assets/products/samsung-z-fold.jpg';
import xiaomiPhone from '@/assets/products/xiaomi-phone.jpg';
import oneplusPhone from '@/assets/products/oneplus-phone.jpg';

// New product images - Laptops
import dellXps15 from '@/assets/products/dell-xps-15.jpg';
import asusRog from '@/assets/products/asus-rog.jpg';
import lenovoThinkpad from '@/assets/products/lenovo-thinkpad.jpg';
import surfaceLaptop from '@/assets/products/surface-laptop.jpg';

// New product images - Sneakers
import nikeAf1White from '@/assets/products/nike-af1-white.jpg';
import nikeAf1Black from '@/assets/products/nike-af1-black.jpg';
import nikeAf1Red from '@/assets/products/nike-af1-red.jpg';
import nikeAf1Navy from '@/assets/products/nike-af1-navy.jpg';
import jordan1 from '@/assets/products/jordan-1.jpg';
import pumaRsx from '@/assets/products/puma-rsx.jpg';
import adidasUltraboost from '@/assets/products/adidas-ultraboost.jpg';
import newbalance990 from '@/assets/products/newbalance-990.jpg';

// New product images - Watches
import gshockBlack from '@/assets/products/gshock-black.jpg';
import gshockGold from '@/assets/products/gshock-gold.jpg';
import rolexSubmariner from '@/assets/products/rolex-submariner.jpg';
import rolexDaytona from '@/assets/products/rolex-daytona.jpg';
import sportsWatch from '@/assets/products/sports-watch.jpg';
import smartWatchRound from '@/assets/products/smart-watch-round.jpg';
import galaxyWatch from '@/assets/products/galaxy-watch.jpg';

// New product images - Audio
import airpodsPro from '@/assets/products/airpods-pro.jpg';
import airpodsMax from '@/assets/products/airpods-max.jpg';
import oraimoFreepods from '@/assets/products/oraimo-freepods.jpg';
import oraimoNeckband from '@/assets/products/oraimo-neckband.jpg';
import samsungBuds from '@/assets/products/samsung-buds.jpg';
import jblSpeaker from '@/assets/products/jbl-speaker.jpg';
import sonyHeadphones from '@/assets/products/sony-headphones.jpg';
import gamingHeadset from '@/assets/products/gaming-headset.jpg';
import boseHeadphones from '@/assets/products/bose-headphones.jpg';

// New product images - Accessories
import tabletPro from '@/assets/products/tablet-pro.jpg';
import powerBank from '@/assets/products/power-bank.jpg';
import wirelessCharger from '@/assets/products/wireless-charger.jpg';
import smartSpeaker from '@/assets/products/smart-speaker.jpg';

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
  // ==================== PHONES (10 Products) ====================
  {
    id: '1',
    title: 'iPhone 16 Pro Max',
    description: 'The most powerful iPhone ever with A18 Pro chip, titanium design, and revolutionary camera system. Capture stunning 48MP photos and 4K ProRes video.',
    handle: 'iphone-16-pro-max',
    tags: ['electronics', 'smartphones', 'featured', 'premium', 'apple'],
    price: 1199.99,
    currencyCode: 'USD',
    image: iphone16Pro,
    images: [iphone16Pro, iphone15, smartphonePro],
    variants: [
      { id: 'v-iphone16-1', title: '256GB / Natural Titanium', price: 1199.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Natural Titanium' }] },
      { id: 'v-iphone16-2', title: '512GB / Natural Titanium', price: 1399.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Natural Titanium' }] },
      { id: 'v-iphone16-3', title: '1TB / Black Titanium', price: 1599.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '1TB' }, { name: 'Color', value: 'Black Titanium' }] },
      { id: 'v-iphone16-4', title: '256GB / White Titanium', price: 1199.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'White Titanium' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] },
      { name: 'Color', values: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium'] }
    ]
  },
  {
    id: '2',
    title: 'iPhone 15',
    description: 'Dynamic Island, 48MP camera, and USB-C. The perfect balance of power and portability with the A16 Bionic chip.',
    handle: 'iphone-15',
    tags: ['electronics', 'smartphones', 'new-arrival', 'apple'],
    price: 799.99,
    currencyCode: 'USD',
    image: iphone15,
    images: [iphone15, iphone16Pro, smartphonePro],
    variants: [
      { id: 'v-iphone15-1', title: '128GB / Blue', price: 799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '128GB' }, { name: 'Color', value: 'Blue' }] },
      { id: 'v-iphone15-2', title: '256GB / Blue', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Blue' }] },
      { id: 'v-iphone15-3', title: '128GB / Pink', price: 799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '128GB' }, { name: 'Color', value: 'Pink' }] },
      { id: 'v-iphone15-4', title: '256GB / Black', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Storage', values: ['128GB', '256GB', '512GB'] },
      { name: 'Color', values: ['Blue', 'Pink', 'Yellow', 'Green', 'Black'] }
    ]
  },
  {
    id: '3',
    title: 'Google Pixel 9 Pro',
    description: 'The best of Google AI in a phone. Tensor G4 chip, incredible low-light photography, and 7 years of software updates.',
    handle: 'google-pixel-9-pro',
    tags: ['electronics', 'smartphones', 'featured', 'google', 'ai'],
    price: 999.99,
    currencyCode: 'USD',
    image: pixel9Pro,
    images: [pixel9Pro, smartphonePro, samsungS24Ultra],
    variants: [
      { id: 'v-pixel9-1', title: '128GB / Obsidian', price: 999.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '128GB' }, { name: 'Color', value: 'Obsidian' }] },
      { id: 'v-pixel9-2', title: '256GB / Obsidian', price: 1059.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Obsidian' }] },
      { id: 'v-pixel9-3', title: '256GB / Porcelain', price: 1059.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Porcelain' }] },
      { id: 'v-pixel9-4', title: '512GB / Hazel', price: 1179.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Hazel' }] }
    ],
    options: [
      { name: 'Storage', values: ['128GB', '256GB', '512GB'] },
      { name: 'Color', values: ['Obsidian', 'Porcelain', 'Hazel', 'Rose'] }
    ]
  },
  {
    id: '4',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Ultimate flagship with S Pen, 200MP camera, and Galaxy AI features. Titanium frame with stunning Dynamic AMOLED display.',
    handle: 'samsung-galaxy-s24-ultra',
    tags: ['electronics', 'smartphones', 'featured', 'samsung', 'premium'],
    price: 1299.99,
    currencyCode: 'USD',
    image: samsungS24Ultra,
    images: [samsungS24Ultra, samsungZFold, pixel9Pro],
    variants: [
      { id: 'v-s24ultra-1', title: '256GB / Titanium Gray', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Titanium Gray' }] },
      { id: 'v-s24ultra-2', title: '512GB / Titanium Gray', price: 1419.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Titanium Gray' }] },
      { id: 'v-s24ultra-3', title: '256GB / Titanium Black', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Titanium Black' }] },
      { id: 'v-s24ultra-4', title: '1TB / Titanium Violet', price: 1659.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '1TB' }, { name: 'Color', value: 'Titanium Violet' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] },
      { name: 'Color', values: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'] }
    ]
  },
  {
    id: '5',
    title: 'Samsung Galaxy Z Fold 5',
    description: 'Revolutionary foldable phone with Flex Mode, massive 7.6" inner display, and powerful multitasking capabilities.',
    handle: 'samsung-galaxy-z-fold-5',
    tags: ['electronics', 'smartphones', 'samsung', 'foldable', 'premium'],
    price: 1799.99,
    currencyCode: 'USD',
    image: samsungZFold,
    images: [samsungZFold, samsungS24Ultra, tabletPro],
    variants: [
      { id: 'v-zfold5-1', title: '256GB / Phantom Black', price: 1799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Phantom Black' }] },
      { id: 'v-zfold5-2', title: '512GB / Phantom Black', price: 1919.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Phantom Black' }] },
      { id: 'v-zfold5-3', title: '256GB / Icy Blue', price: 1799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Icy Blue' }] },
      { id: 'v-zfold5-4', title: '512GB / Cream', price: 1919.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Cream' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] },
      { name: 'Color', values: ['Phantom Black', 'Icy Blue', 'Cream'] }
    ]
  },
  {
    id: '6',
    title: 'Xiaomi 14 Ultra',
    description: 'Professional Leica optics with 1-inch sensor, Snapdragon 8 Gen 3, and HyperOS for lightning-fast performance.',
    handle: 'xiaomi-14-ultra',
    tags: ['electronics', 'smartphones', 'xiaomi', 'camera', 'new-arrival'],
    price: 899.99,
    currencyCode: 'USD',
    image: xiaomiPhone,
    images: [xiaomiPhone, oneplusPhone, samsungS24Ultra],
    variants: [
      { id: 'v-xiaomi14-1', title: '256GB / Black', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-xiaomi14-2', title: '512GB / Black', price: 999.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-xiaomi14-3', title: '256GB / White', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'White' }] },
      { id: 'v-xiaomi14-4', title: '512GB / Blue', price: 999.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Blue' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB'] },
      { name: 'Color', values: ['Black', 'White', 'Blue'] }
    ]
  },
  {
    id: '7',
    title: 'OnePlus 12',
    description: 'Flagship killer with Hasselblad camera tuning, 100W SUPERVOOC charging, and buttery smooth 120Hz ProXDR display.',
    handle: 'oneplus-12',
    tags: ['electronics', 'smartphones', 'oneplus', 'fast-charging'],
    price: 799.99,
    currencyCode: 'USD',
    image: oneplusPhone,
    images: [oneplusPhone, xiaomiPhone, pixel9Pro],
    variants: [
      { id: 'v-oneplus12-1', title: '256GB / Silky Black', price: 799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Silky Black' }] },
      { id: 'v-oneplus12-2', title: '512GB / Silky Black', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Silky Black' }] },
      { id: 'v-oneplus12-3', title: '256GB / Flowy Emerald', price: 799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Flowy Emerald' }] },
      { id: 'v-oneplus12-4', title: '512GB / Flowy Emerald', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Flowy Emerald' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB'] },
      { name: 'Color', values: ['Silky Black', 'Flowy Emerald'] }
    ]
  },
  {
    id: '8',
    title: 'Smartphone Pro',
    description: 'Professional grade smartphone with edge-to-edge display, advanced camera system, and lightning-fast performance.',
    handle: 'smartphone-pro',
    tags: ['electronics', 'smartphones', 'new-arrival'],
    price: 699.99,
    currencyCode: 'USD',
    image: smartphonePro,
    images: [smartphonePro, iphone15, samsungS24Ultra],
    variants: [
      { id: 'v-smartpro-1', title: '128GB / Black', price: 699.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '128GB' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-smartpro-2', title: '256GB / Black', price: 799.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-smartpro-3', title: '128GB / Silver', price: 699.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '128GB' }, { name: 'Color', value: 'Silver' }] }
    ],
    options: [
      { name: 'Storage', values: ['128GB', '256GB'] },
      { name: 'Color', values: ['Black', 'Silver'] }
    ]
  },
  {
    id: '9',
    title: 'iPad Pro 12.9"',
    description: 'The ultimate iPad experience with M4 chip, Liquid Retina XDR display, and Apple Pencil Pro support.',
    handle: 'ipad-pro-12',
    tags: ['electronics', 'tablets', 'apple', 'featured', 'premium'],
    price: 1099.99,
    currencyCode: 'USD',
    image: tabletPro,
    images: [tabletPro, samsungZFold, macbookPro],
    variants: [
      { id: 'v-ipadpro-1', title: '256GB / Space Gray', price: 1099.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Space Gray' }] },
      { id: 'v-ipadpro-2', title: '512GB / Space Gray', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Space Gray' }] },
      { id: 'v-ipadpro-3', title: '256GB / Silver', price: 1099.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Silver' }] },
      { id: 'v-ipadpro-4', title: '1TB / Silver', price: 1699.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '1TB' }, { name: 'Color', value: 'Silver' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB', '1TB', '2TB'] },
      { name: 'Color', values: ['Space Gray', 'Silver'] }
    ]
  },
  {
    id: '10',
    title: 'Samsung Galaxy Tab S9 Ultra',
    description: 'The biggest Galaxy Tab with 14.6" Dynamic AMOLED display, S Pen included, and DeX for desktop productivity.',
    handle: 'samsung-galaxy-tab-s9-ultra',
    tags: ['electronics', 'tablets', 'samsung', 'premium'],
    price: 1199.99,
    currencyCode: 'USD',
    image: tabletPro,
    images: [tabletPro, samsungZFold, laptopUltra],
    variants: [
      { id: 'v-tabs9-1', title: '256GB / Graphite', price: 1199.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Graphite' }] },
      { id: 'v-tabs9-2', title: '512GB / Graphite', price: 1319.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '512GB' }, { name: 'Color', value: 'Graphite' }] },
      { id: 'v-tabs9-3', title: '256GB / Beige', price: 1199.99, availableForSale: true, selectedOptions: [{ name: 'Storage', value: '256GB' }, { name: 'Color', value: 'Beige' }] }
    ],
    options: [
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] },
      { name: 'Color', values: ['Graphite', 'Beige'] }
    ]
  },

  // ==================== LAPTOPS (10 Products) ====================
  {
    id: '11',
    title: 'MacBook Pro 16"',
    description: 'Supercharged by M3 Max chip with up to 128GB unified memory. Pro performance meets stunning Liquid Retina XDR display.',
    handle: 'macbook-pro-16',
    tags: ['electronics', 'laptops', 'apple', 'featured', 'premium'],
    price: 2499.99,
    currencyCode: 'USD',
    image: macbookPro,
    images: [macbookPro, laptopUltra, dellXps15],
    variants: [
      { id: 'v-mbp16-1', title: 'M3 Pro / 18GB / 512GB / Space Black', price: 2499.99, availableForSale: true, selectedOptions: [{ name: 'Chip', value: 'M3 Pro' }, { name: 'Memory', value: '18GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-mbp16-2', title: 'M3 Pro / 36GB / 1TB / Space Black', price: 2999.99, availableForSale: true, selectedOptions: [{ name: 'Chip', value: 'M3 Pro' }, { name: 'Memory', value: '36GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-mbp16-3', title: 'M3 Max / 48GB / 1TB / Silver', price: 3499.99, availableForSale: true, selectedOptions: [{ name: 'Chip', value: 'M3 Max' }, { name: 'Memory', value: '48GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-mbp16-4', title: 'M3 Max / 128GB / 2TB / Space Black', price: 4499.99, availableForSale: true, selectedOptions: [{ name: 'Chip', value: 'M3 Max' }, { name: 'Memory', value: '128GB' }, { name: 'Storage', value: '2TB' }] }
    ],
    options: [
      { name: 'Chip', values: ['M3 Pro', 'M3 Max'] },
      { name: 'Memory', values: ['18GB', '36GB', '48GB', '64GB', '128GB'] },
      { name: 'Storage', values: ['512GB', '1TB', '2TB', '4TB', '8TB'] }
    ]
  },
  {
    id: '12',
    title: 'Dell XPS 15',
    description: 'InfinityEdge display with 3.5K OLED, 13th Gen Intel Core, and CNC-machined aluminum chassis for premium feel.',
    handle: 'dell-xps-15',
    tags: ['electronics', 'laptops', 'dell', 'featured', 'ultrabook'],
    price: 1799.99,
    currencyCode: 'USD',
    image: dellXps15,
    images: [dellXps15, macbookPro, surfaceLaptop],
    variants: [
      { id: 'v-xps15-1', title: 'i7 / 16GB / 512GB / Silver', price: 1799.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-xps15-2', title: 'i7 / 32GB / 1TB / Silver', price: 2199.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-xps15-3', title: 'i9 / 32GB / 1TB / Platinum Silver', price: 2499.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i9' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-xps15-4', title: 'i9 / 64GB / 2TB / Platinum Silver', price: 2999.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i9' }, { name: 'RAM', value: '64GB' }, { name: 'Storage', value: '2TB' }] }
    ],
    options: [
      { name: 'Processor', values: ['Intel Core i7', 'Intel Core i9'] },
      { name: 'RAM', values: ['16GB', '32GB', '64GB'] },
      { name: 'Storage', values: ['512GB', '1TB', '2TB'] }
    ]
  },
  {
    id: '13',
    title: 'ASUS ROG Zephyrus G16',
    description: 'Ultimate gaming laptop with RTX 4090, Intel Core Ultra 9, and OLED display. Dominate every game.',
    handle: 'asus-rog-zephyrus-g16',
    tags: ['electronics', 'laptops', 'gaming', 'asus', 'premium'],
    price: 2999.99,
    currencyCode: 'USD',
    image: asusRog,
    images: [asusRog, gamingHeadset, dellXps15],
    variants: [
      { id: 'v-rog16-1', title: 'RTX 4070 / 16GB / 1TB / Eclipse Gray', price: 1999.99, availableForSale: true, selectedOptions: [{ name: 'GPU', value: 'RTX 4070' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-rog16-2', title: 'RTX 4080 / 32GB / 1TB / Eclipse Gray', price: 2499.99, availableForSale: true, selectedOptions: [{ name: 'GPU', value: 'RTX 4080' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] },
      { id: 'v-rog16-3', title: 'RTX 4090 / 32GB / 2TB / Eclipse Gray', price: 2999.99, availableForSale: true, selectedOptions: [{ name: 'GPU', value: 'RTX 4090' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '2TB' }] },
      { id: 'v-rog16-4', title: 'RTX 4090 / 64GB / 4TB / Platinum White', price: 3499.99, availableForSale: true, selectedOptions: [{ name: 'GPU', value: 'RTX 4090' }, { name: 'RAM', value: '64GB' }, { name: 'Storage', value: '4TB' }] }
    ],
    options: [
      { name: 'GPU', values: ['RTX 4070', 'RTX 4080', 'RTX 4090'] },
      { name: 'RAM', values: ['16GB', '32GB', '64GB'] },
      { name: 'Storage', values: ['1TB', '2TB', '4TB'] }
    ]
  },
  {
    id: '14',
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business ultrabook with military-grade durability, Intel vPro, and legendary ThinkPad keyboard.',
    handle: 'lenovo-thinkpad-x1-carbon',
    tags: ['electronics', 'laptops', 'lenovo', 'business', 'ultrabook'],
    price: 1649.99,
    currencyCode: 'USD',
    image: lenovoThinkpad,
    images: [lenovoThinkpad, dellXps15, hpElite],
    variants: [
      { id: 'v-x1carbon-1', title: 'i5 / 16GB / 256GB / Black', price: 1649.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i5' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '256GB' }] },
      { id: 'v-x1carbon-2', title: 'i7 / 16GB / 512GB / Black', price: 1949.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-x1carbon-3', title: 'i7 / 32GB / 1TB / Black', price: 2349.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] }
    ],
    options: [
      { name: 'Processor', values: ['Intel Core i5', 'Intel Core i7'] },
      { name: 'RAM', values: ['16GB', '32GB'] },
      { name: 'Storage', values: ['256GB', '512GB', '1TB', '2TB'] }
    ]
  },
  {
    id: '15',
    title: 'Microsoft Surface Laptop 6',
    description: 'Sleek design meets performance with PixelSense touchscreen, Copilot+ PC, and all-day battery life.',
    handle: 'microsoft-surface-laptop-6',
    tags: ['electronics', 'laptops', 'microsoft', 'surface', 'new-arrival'],
    price: 1299.99,
    currencyCode: 'USD',
    image: surfaceLaptop,
    images: [surfaceLaptop, macbookPro, dellXps15],
    variants: [
      { id: 'v-surface6-1', title: 'Snapdragon X Plus / 16GB / 256GB / Platinum', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Snapdragon X Plus' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '256GB' }] },
      { id: 'v-surface6-2', title: 'Snapdragon X Elite / 16GB / 512GB / Platinum', price: 1599.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Snapdragon X Elite' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-surface6-3', title: 'Snapdragon X Elite / 32GB / 1TB / Graphite', price: 1999.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Snapdragon X Elite' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] }
    ],
    options: [
      { name: 'Processor', values: ['Snapdragon X Plus', 'Snapdragon X Elite'] },
      { name: 'RAM', values: ['16GB', '32GB'] },
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] }
    ]
  },
  {
    id: '16',
    title: 'HP Elite Dragonfly',
    description: 'Ultra-lightweight business laptop with Sure View privacy screen and 5G connectivity for professionals.',
    handle: 'hp-elite-dragonfly',
    tags: ['electronics', 'laptops', 'hp', 'business', 'ultrabook'],
    price: 1899.99,
    currencyCode: 'USD',
    image: hpElite,
    images: [hpElite, hpProbook, lenovoThinkpad],
    variants: [
      { id: 'v-dragonfly-1', title: 'i5 / 16GB / 256GB / Galaxy Blue', price: 1899.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i5' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '256GB' }] },
      { id: 'v-dragonfly-2', title: 'i7 / 16GB / 512GB / Galaxy Blue', price: 2199.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-dragonfly-3', title: 'i7 / 32GB / 1TB / Sparkling Black', price: 2599.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '32GB' }, { name: 'Storage', value: '1TB' }] }
    ],
    options: [
      { name: 'Processor', values: ['Intel Core i5', 'Intel Core i7'] },
      { name: 'RAM', values: ['16GB', '32GB'] },
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] }
    ]
  },
  {
    id: '17',
    title: 'HP ProBook 450',
    description: 'Reliable business laptop with security features, long battery life, and durable build quality.',
    handle: 'hp-probook-450',
    tags: ['electronics', 'laptops', 'hp', 'business'],
    price: 899.99,
    currencyCode: 'USD',
    image: hpProbook,
    images: [hpProbook, hpElite, lenovoThinkpad],
    variants: [
      { id: 'v-probook-1', title: 'i5 / 8GB / 256GB / Silver', price: 899.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i5' }, { name: 'RAM', value: '8GB' }, { name: 'Storage', value: '256GB' }] },
      { id: 'v-probook-2', title: 'i5 / 16GB / 512GB / Silver', price: 1099.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i5' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] },
      { id: 'v-probook-3', title: 'i7 / 16GB / 512GB / Silver', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Processor', value: 'Intel Core i7' }, { name: 'RAM', value: '16GB' }, { name: 'Storage', value: '512GB' }] }
    ],
    options: [
      { name: 'Processor', values: ['Intel Core i5', 'Intel Core i7'] },
      { name: 'RAM', values: ['8GB', '16GB', '32GB'] },
      { name: 'Storage', values: ['256GB', '512GB', '1TB'] }
    ]
  },
  {
    id: '18',
    title: 'Ultra Thin Laptop',
    description: 'Sleek and powerful laptop with stunning display, all-day battery life, and ultra-portable design.',
    handle: 'laptop-ultra-thin',
    tags: ['electronics', 'laptops', 'ultrabook'],
    price: 1299.99,
    currencyCode: 'USD',
    image: laptopUltra,
    images: [laptopUltra, macbookPro, surfaceLaptop],
    variants: [
      { id: 'v-ultrathin-1', title: '8GB RAM / 256GB SSD', price: 1299.99, availableForSale: true, selectedOptions: [{ name: 'Configuration', value: '8GB RAM / 256GB SSD' }] },
      { id: 'v-ultrathin-2', title: '16GB RAM / 512GB SSD', price: 1599.99, availableForSale: true, selectedOptions: [{ name: 'Configuration', value: '16GB RAM / 512GB SSD' }] }
    ],
    options: [
      { name: 'Configuration', values: ['8GB RAM / 256GB SSD', '16GB RAM / 512GB SSD'] }
    ]
  },

  // ==================== SNEAKERS (10 Products) ====================
  {
    id: '19',
    title: 'Nike Air Force 1 Low',
    description: 'The iconic AF1 with premium leather, Air-Sole cushioning, and timeless style since 1982.',
    handle: 'nike-air-force-1-low',
    tags: ['fashion', 'footwear', 'sneakers', 'nike', 'featured'],
    price: 110.00,
    currencyCode: 'USD',
    image: nikeAf1White,
    images: [nikeAf1White, nikeAf1Black, nikeAf1Red, nikeAf1Navy],
    variants: [
      { id: 'v-af1low-1', title: '8 / White', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'White' }] },
      { id: 'v-af1low-2', title: '9 / White', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'White' }] },
      { id: 'v-af1low-3', title: '10 / White', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'White' }] },
      { id: 'v-af1low-4', title: '11 / White', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12', '13'] },
      { name: 'Color', values: ['White', 'Black', 'Wheat'] }
    ]
  },
  {
    id: '20',
    title: 'Nike Air Force 1 High',
    description: 'Classic high-top silhouette with ankle strap, perfect for street style and everyday comfort.',
    handle: 'nike-air-force-1-high',
    tags: ['fashion', 'footwear', 'sneakers', 'nike'],
    price: 135.00,
    currencyCode: 'USD',
    image: nikeAf1Navy,
    images: [nikeAf1Navy, nikeAf1Red, nikeAf1Black, nikeAf1White],
    variants: [
      { id: 'v-af1high-1', title: '8 / Navy', price: 135.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Navy' }] },
      { id: 'v-af1high-2', title: '9 / Navy', price: 135.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Navy' }] },
      { id: 'v-af1high-3', title: '10 / Red', price: 135.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'Red' }] },
      { id: 'v-af1high-4', title: '11 / Black', price: 135.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12'] },
      { name: 'Color', values: ['Navy', 'Red', 'Black', 'White'] }
    ]
  },
  {
    id: '21',
    title: 'Nike Air Force 1 Mid',
    description: 'Mid-cut design offering the perfect balance of support and flexibility with iconic Air Force style.',
    handle: 'nike-air-force-1-mid',
    tags: ['fashion', 'footwear', 'sneakers', 'nike'],
    price: 125.00,
    currencyCode: 'USD',
    image: nikeAf1Red,
    images: [nikeAf1Red, nikeAf1Navy, nikeAf1White, nikeAf1Black],
    variants: [
      { id: 'v-af1mid-1', title: '8 / Red', price: 125.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Red' }] },
      { id: 'v-af1mid-2', title: '9 / Red', price: 125.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Red' }] },
      { id: 'v-af1mid-3', title: '10 / White', price: 125.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'White' }] },
      { id: 'v-af1mid-4', title: '11 / Black', price: 125.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12'] },
      { name: 'Color', values: ['Red', 'White', 'Black', 'Navy'] }
    ]
  },
  {
    id: '22',
    title: 'Nike Air Force 1 Shadow',
    description: 'Double-stacked design with playful colors and textures. A fresh take on the classic.',
    handle: 'nike-air-force-1-shadow',
    tags: ['fashion', 'footwear', 'sneakers', 'nike', 'new-arrival'],
    price: 130.00,
    currencyCode: 'USD',
    image: nikeAf1Black,
    images: [nikeAf1Black, nikeAf1White, nikeAf1Red],
    variants: [
      { id: 'v-af1shadow-1', title: '6 / Black/White', price: 130.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '6' }, { name: 'Color', value: 'Black/White' }] },
      { id: 'v-af1shadow-2', title: '7 / Black/White', price: 130.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '7' }, { name: 'Color', value: 'Black/White' }] },
      { id: 'v-af1shadow-3', title: '8 / Black/White', price: 130.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Black/White' }] },
      { id: 'v-af1shadow-4', title: '9 / Black/White', price: 130.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Black/White' }] }
    ],
    options: [
      { name: 'Size', values: ['5', '6', '7', '8', '9', '10'] },
      { name: 'Color', values: ['Black/White', 'Sail/Pink', 'White/Multi'] }
    ]
  },
  {
    id: '23',
    title: 'Air Jordan 1 Retro High OG',
    description: 'The shoe that started it all. Iconic Chicago colorway with premium leather and Air cushioning.',
    handle: 'jordan-1-retro-high-og',
    tags: ['fashion', 'footwear', 'sneakers', 'nike', 'jordan', 'featured', 'premium'],
    price: 180.00,
    currencyCode: 'USD',
    image: jordan1,
    images: [jordan1, nikeAf1Red, nikeAf1Navy],
    variants: [
      { id: 'v-aj1og-1', title: '8 / Chicago', price: 180.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Chicago' }] },
      { id: 'v-aj1og-2', title: '9 / Chicago', price: 180.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Chicago' }] },
      { id: 'v-aj1og-3', title: '10 / Chicago', price: 180.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'Chicago' }] },
      { id: 'v-aj1og-4', title: '11 / Chicago', price: 180.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Chicago' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12', '13'] },
      { name: 'Color', values: ['Chicago', 'Royal Blue', 'Bred', 'Shadow'] }
    ]
  },
  {
    id: '24',
    title: 'Adidas Ultraboost 24',
    description: 'Most comfortable running shoe with Boost midsole, Primeknit upper, and adaptive support.',
    handle: 'adidas-ultraboost-24',
    tags: ['fashion', 'footwear', 'sneakers', 'adidas', 'running', 'featured'],
    price: 190.00,
    currencyCode: 'USD',
    image: adidasUltraboost,
    images: [adidasUltraboost, sneakersWhite, pumaRsx],
    variants: [
      { id: 'v-ub24-1', title: '8 / Core Black', price: 190.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Core Black' }] },
      { id: 'v-ub24-2', title: '9 / Core Black', price: 190.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Core Black' }] },
      { id: 'v-ub24-3', title: '10 / Cloud White', price: 190.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'Cloud White' }] },
      { id: 'v-ub24-4', title: '11 / Core Black', price: 190.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Core Black' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12'] },
      { name: 'Color', values: ['Core Black', 'Cloud White', 'Grey', 'Blue'] }
    ]
  },
  {
    id: '25',
    title: 'Puma RS-X',
    description: 'Retro running reinvented with bold colors, chunky silhouette, and RS cushioning technology.',
    handle: 'puma-rs-x',
    tags: ['fashion', 'footwear', 'sneakers', 'puma', 'retro'],
    price: 110.00,
    currencyCode: 'USD',
    image: pumaRsx,
    images: [pumaRsx, adidasUltraboost, newbalance990],
    variants: [
      { id: 'v-rsx-1', title: '8 / White/Red/Blue', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'White/Red/Blue' }] },
      { id: 'v-rsx-2', title: '9 / White/Red/Blue', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'White/Red/Blue' }] },
      { id: 'v-rsx-3', title: '10 / White/Red/Blue', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'White/Red/Blue' }] },
      { id: 'v-rsx-4', title: '11 / Black/Grey', price: 110.00, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Black/Grey' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12'] },
      { name: 'Color', values: ['White/Red/Blue', 'Black/Grey', 'Grey/Neon'] }
    ]
  },
  {
    id: '26',
    title: 'New Balance 990v6',
    description: 'Made in USA with premium materials. The pinnacle of New Balance craftsmanship and comfort.',
    handle: 'new-balance-990v6',
    tags: ['fashion', 'footwear', 'sneakers', 'new-balance', 'premium'],
    price: 199.99,
    currencyCode: 'USD',
    image: newbalance990,
    images: [newbalance990, adidasUltraboost, sneakersWhite],
    variants: [
      { id: 'v-nb990-1', title: '8 / Grey', price: 199.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'Grey' }] },
      { id: 'v-nb990-2', title: '9 / Grey', price: 199.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Grey' }] },
      { id: 'v-nb990-3', title: '10 / Grey', price: 199.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'Grey' }] },
      { id: 'v-nb990-4', title: '11 / Navy', price: 199.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '11' }, { name: 'Color', value: 'Navy' }] }
    ],
    options: [
      { name: 'Size', values: ['7', '8', '9', '10', '11', '12', '13'] },
      { name: 'Color', values: ['Grey', 'Navy', 'Black'] }
    ]
  },
  {
    id: '27',
    title: 'Leather Sneakers',
    description: 'Minimalist white leather sneakers with premium craftsmanship. Versatile design for any outfit.',
    handle: 'leather-sneakers',
    tags: ['fashion', 'footwear', 'sneakers', 'minimal'],
    price: 89.99,
    currencyCode: 'USD',
    image: sneakersWhite,
    images: [sneakersWhite, nikeAf1White, adidasUltraboost],
    variants: [
      { id: 'v-leather-1', title: '8 / White', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '8' }, { name: 'Color', value: 'White' }] },
      { id: 'v-leather-2', title: '9 / White', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'White' }] },
      { id: 'v-leather-3', title: '10 / White', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Size', values: ['8', '9', '10'] },
      { name: 'Color', values: ['White'] }
    ]
  },

  // ==================== WATCHES (10 Products) ====================
  {
    id: '28',
    title: 'Rolex Submariner',
    description: 'Legendary diving watch with Oystersteel case, unidirectional bezel, and waterproof to 300m.',
    handle: 'rolex-submariner',
    tags: ['fashion', 'accessories', 'watches', 'luxury', 'featured', 'premium'],
    price: 8999.99,
    currencyCode: 'USD',
    image: rolexSubmariner,
    images: [rolexSubmariner, rolexDaytona, smartWatchRound],
    variants: [
      { id: 'v-submariner-1', title: 'Black Dial / Oystersteel', price: 8999.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'Black' }, { name: 'Material', value: 'Oystersteel' }] },
      { id: 'v-submariner-2', title: 'Green Dial / Oystersteel', price: 9499.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'Green' }, { name: 'Material', value: 'Oystersteel' }] },
      { id: 'v-submariner-3', title: 'Blue Dial / White Gold', price: 39999.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'Blue' }, { name: 'Material', value: 'White Gold' }] }
    ],
    options: [
      { name: 'Dial', values: ['Black', 'Green', 'Blue'] },
      { name: 'Material', values: ['Oystersteel', 'Yellow Gold', 'White Gold'] }
    ]
  },
  {
    id: '29',
    title: 'Rolex Daytona',
    description: 'The ultimate racing chronograph with gold case, white dial, and tachymeter bezel.',
    handle: 'rolex-daytona',
    tags: ['fashion', 'accessories', 'watches', 'luxury', 'premium'],
    price: 14999.99,
    currencyCode: 'USD',
    image: rolexDaytona,
    images: [rolexDaytona, rolexSubmariner, watchSilver],
    variants: [
      { id: 'v-daytona-1', title: 'White Dial / Yellow Gold', price: 14999.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'White' }, { name: 'Material', value: 'Yellow Gold' }] },
      { id: 'v-daytona-2', title: 'Black Dial / Oystersteel', price: 13999.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'Black' }, { name: 'Material', value: 'Oystersteel' }] },
      { id: 'v-daytona-3', title: 'Panda Dial / Oystersteel', price: 14499.99, availableForSale: true, selectedOptions: [{ name: 'Dial', value: 'Panda' }, { name: 'Material', value: 'Oystersteel' }] }
    ],
    options: [
      { name: 'Dial', values: ['White', 'Black', 'Panda', 'Champagne'] },
      { name: 'Material', values: ['Yellow Gold', 'Oystersteel', 'Rose Gold'] }
    ]
  },
  {
    id: '30',
    title: 'Casio G-Shock GA-2100',
    description: 'The "CasiOak" with octagonal bezel, carbon core guard, and legendary G-Shock toughness.',
    handle: 'casio-gshock-ga2100',
    tags: ['fashion', 'accessories', 'watches', 'casio', 'featured'],
    price: 99.99,
    currencyCode: 'USD',
    image: gshockBlack,
    images: [gshockBlack, gshockGold, sportsWatch],
    variants: [
      { id: 'v-ga2100-1', title: 'Black / Black', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black / Black' }] },
      { id: 'v-ga2100-2', title: 'Olive / Black', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Olive / Black' }] },
      { id: 'v-ga2100-3', title: 'White / Black', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White / Black' }] },
      { id: 'v-ga2100-4', title: 'Navy / Blue', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Navy / Blue' }] }
    ],
    options: [
      { name: 'Color', values: ['Black / Black', 'Olive / Black', 'White / Black', 'Navy / Blue', 'All Black'] }
    ]
  },
  {
    id: '31',
    title: 'G-Shock GM-B2100 Metal',
    description: 'Premium metal-covered G-Shock with solar power, Bluetooth connectivity, and full-metal construction.',
    handle: 'gshock-gmb2100-metal',
    tags: ['fashion', 'accessories', 'watches', 'casio', 'premium'],
    price: 550.00,
    currencyCode: 'USD',
    image: gshockGold,
    images: [gshockGold, gshockBlack, watchSilver],
    variants: [
      { id: 'v-gmb2100-1', title: 'Gold / Black', price: 550.00, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Gold / Black' }] },
      { id: 'v-gmb2100-2', title: 'Silver / Black', price: 500.00, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver / Black' }] },
      { id: 'v-gmb2100-3', title: 'Rose Gold / Black', price: 550.00, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Rose Gold / Black' }] }
    ],
    options: [
      { name: 'Color', values: ['Gold / Black', 'Silver / Black', 'Rose Gold / Black', 'All Black'] }
    ]
  },
  {
    id: '32',
    title: 'Samsung Galaxy Watch 6 Classic',
    description: 'Premium smartwatch with rotating bezel, health tracking, and Wear OS for seamless connectivity.',
    handle: 'samsung-galaxy-watch-6-classic',
    tags: ['electronics', 'wearables', 'watches', 'samsung', 'smart'],
    price: 399.99,
    currencyCode: 'USD',
    image: galaxyWatch,
    images: [galaxyWatch, smartWatchRound, smartwatchElite],
    variants: [
      { id: 'v-gw6c-1', title: '43mm / Black', price: 399.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '43mm' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-gw6c-2', title: '47mm / Black', price: 429.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '47mm' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-gw6c-3', title: '43mm / Silver', price: 399.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '43mm' }, { name: 'Color', value: 'Silver' }] },
      { id: 'v-gw6c-4', title: '47mm / Silver', price: 429.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '47mm' }, { name: 'Color', value: 'Silver' }] }
    ],
    options: [
      { name: 'Size', values: ['43mm', '47mm'] },
      { name: 'Color', values: ['Black', 'Silver'] }
    ]
  },
  {
    id: '33',
    title: 'Sports Chronograph',
    description: 'Professional sports watch with chronograph, digital display, and 200m water resistance.',
    handle: 'sports-chronograph',
    tags: ['fashion', 'accessories', 'watches', 'sports'],
    price: 249.99,
    currencyCode: 'USD',
    image: sportsWatch,
    images: [sportsWatch, gshockBlack, smartWatchRound],
    variants: [
      { id: 'v-sportchrono-1', title: 'Navy / Blue Rubber', price: 249.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Navy' }, { name: 'Strap', value: 'Blue Rubber' }] },
      { id: 'v-sportchrono-2', title: 'Black / Black Rubber', price: 249.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }, { name: 'Strap', value: 'Black Rubber' }] }
    ],
    options: [
      { name: 'Color', values: ['Navy', 'Black'] },
      { name: 'Strap', values: ['Blue Rubber', 'Black Rubber', 'Stainless Steel'] }
    ]
  },
  {
    id: '34',
    title: 'Smartwatch Elite',
    description: 'Premium smartwatch with AMOLED display, comprehensive fitness tracking, and extended battery life.',
    handle: 'smartwatch-elite',
    tags: ['electronics', 'wearables', 'watches', 'featured'],
    price: 349.99,
    currencyCode: 'USD',
    image: smartwatchElite,
    images: [smartwatchElite, smartWatchRound, galaxyWatch],
    variants: [
      { id: 'v-swelite-1', title: '42mm / Black', price: 349.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '42mm' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-swelite-2', title: '46mm / Black', price: 399.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: '46mm' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['42mm', '46mm'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '35',
    title: 'Classic Wristwatch',
    description: 'Elegant silver wristwatch with precision movement and sophisticated timepiece design.',
    handle: 'classic-wristwatch',
    tags: ['fashion', 'accessories', 'watches'],
    price: 199.99,
    currencyCode: 'USD',
    image: watchSilver,
    images: [watchSilver, rolexSubmariner, smartWatchRound],
    variants: [
      { id: 'v-classic-1', title: 'Silver', price: 199.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }] }
    ],
    options: [
      { name: 'Color', values: ['Silver'] }
    ]
  },
  {
    id: '36',
    title: 'Round Smartwatch',
    description: 'Modern smartwatch with round display, stainless steel construction, and smart notifications.',
    handle: 'round-smartwatch',
    tags: ['electronics', 'wearables', 'watches', 'smart'],
    price: 279.99,
    currencyCode: 'USD',
    image: smartWatchRound,
    images: [smartWatchRound, smartwatchElite, galaxyWatch],
    variants: [
      { id: 'v-round-1', title: 'Silver / Metal Band', price: 279.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }, { name: 'Band', value: 'Metal' }] },
      { id: 'v-round-2', title: 'Silver / Leather Band', price: 279.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }, { name: 'Band', value: 'Leather' }] }
    ],
    options: [
      { name: 'Color', values: ['Silver', 'Black', 'Rose Gold'] },
      { name: 'Band', values: ['Metal', 'Leather', 'Silicone'] }
    ]
  },
  {
    id: '37',
    title: 'Fitness Band',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and water resistance.',
    handle: 'fitness-band',
    tags: ['electronics', 'wearables', 'fitness'],
    price: 79.99,
    currencyCode: 'USD',
    image: fitnessBand,
    images: [fitnessBand, smartwatchElite, smartWatchRound],
    variants: [
      { id: 'v-fitness-1', title: 'Small / Black', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Small' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-fitness-2', title: 'Medium / Black', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Medium' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-fitness-3', title: 'Large / Black', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Large' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['Small', 'Medium', 'Large'] },
      { name: 'Color', values: ['Black'] }
    ]
  },

  // ==================== AUDIO (12 Products) ====================
  {
    id: '38',
    title: 'AirPods Pro (2nd Gen)',
    description: 'Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio with USB-C charging case.',
    handle: 'airpods-pro-2',
    tags: ['electronics', 'audio', 'earbuds', 'apple', 'featured'],
    price: 249.99,
    currencyCode: 'USD',
    image: airpodsPro,
    images: [airpodsPro, samsungBuds, oraimoFreepods],
    variants: [
      { id: 'v-airpodspro-1', title: 'USB-C Case', price: 249.99, availableForSale: true, selectedOptions: [{ name: 'Case', value: 'USB-C' }] },
      { id: 'v-airpodspro-2', title: 'MagSafe Case', price: 249.99, availableForSale: true, selectedOptions: [{ name: 'Case', value: 'MagSafe' }] }
    ],
    options: [
      { name: 'Case', values: ['USB-C', 'MagSafe'] }
    ]
  },
  {
    id: '39',
    title: 'AirPods Max',
    description: 'High-fidelity audio with Active Noise Cancellation, Spatial Audio, and premium over-ear design.',
    handle: 'airpods-max',
    tags: ['electronics', 'audio', 'headphones', 'apple', 'premium'],
    price: 549.99,
    currencyCode: 'USD',
    image: airpodsMax,
    images: [airpodsMax, boseHeadphones, sonyHeadphones],
    variants: [
      { id: 'v-airpodsmax-1', title: 'Space Gray', price: 549.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Space Gray' }] },
      { id: 'v-airpodsmax-2', title: 'Silver', price: 549.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }] },
      { id: 'v-airpodsmax-3', title: 'Midnight', price: 549.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Midnight' }] },
      { id: 'v-airpodsmax-4', title: 'Starlight', price: 549.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Starlight' }] }
    ],
    options: [
      { name: 'Color', values: ['Space Gray', 'Silver', 'Midnight', 'Starlight', 'Orange'] }
    ]
  },
  {
    id: '40',
    title: 'Samsung Galaxy Buds3 Pro',
    description: 'Intelligent ANC, 360 Audio, and Galaxy AI features for seamless integration with Samsung devices.',
    handle: 'samsung-galaxy-buds3-pro',
    tags: ['electronics', 'audio', 'earbuds', 'samsung'],
    price: 229.99,
    currencyCode: 'USD',
    image: samsungBuds,
    images: [samsungBuds, airpodsPro, oraimoFreepods],
    variants: [
      { id: 'v-buds3pro-1', title: 'Silver', price: 229.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }] },
      { id: 'v-buds3pro-2', title: 'White', price: 229.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['Silver', 'White'] }
    ]
  },
  {
    id: '41',
    title: 'Oraimo FreePods Pro',
    description: 'Premium wireless earbuds with ANC, 30-hour battery life, and crystal-clear sound quality.',
    handle: 'oraimo-freepods-pro',
    tags: ['electronics', 'audio', 'earbuds', 'oraimo', 'new-arrival'],
    price: 49.99,
    currencyCode: 'USD',
    image: oraimoFreepods,
    images: [oraimoFreepods, oraimoNeckband, samsungBuds],
    variants: [
      { id: 'v-oraimofp-1', title: 'Black', price: 49.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] },
      { id: 'v-oraimofp-2', title: 'White', price: 49.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['Black', 'White'] }
    ]
  },
  {
    id: '42',
    title: 'Oraimo Neckband Pro',
    description: 'Flexible neckband earphones with 50-hour playtime, magnetic earbuds, and fast charging.',
    handle: 'oraimo-neckband-pro',
    tags: ['electronics', 'audio', 'earbuds', 'oraimo'],
    price: 29.99,
    currencyCode: 'USD',
    image: oraimoNeckband,
    images: [oraimoNeckband, oraimoFreepods, earbudsWireless],
    variants: [
      { id: 'v-oraimonb-1', title: 'Black', price: 29.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '43',
    title: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation with 30-hour battery, multipoint connection, and premium sound.',
    handle: 'sony-wh-1000xm5',
    tags: ['electronics', 'audio', 'headphones', 'sony', 'featured', 'premium'],
    price: 349.99,
    currencyCode: 'USD',
    image: sonyHeadphones,
    images: [sonyHeadphones, boseHeadphones, airpodsMax],
    variants: [
      { id: 'v-xm5-1', title: 'Black', price: 349.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] },
      { id: 'v-xm5-2', title: 'Silver', price: 349.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Silver' }] },
      { id: 'v-xm5-3', title: 'Midnight Blue', price: 349.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Midnight Blue' }] }
    ],
    options: [
      { name: 'Color', values: ['Black', 'Silver', 'Midnight Blue'] }
    ]
  },
  {
    id: '44',
    title: 'Bose QuietComfort Ultra',
    description: 'Immersive audio with CustomTune technology, world-class noise cancelling, and all-day comfort.',
    handle: 'bose-quietcomfort-ultra',
    tags: ['electronics', 'audio', 'headphones', 'bose', 'premium'],
    price: 429.99,
    currencyCode: 'USD',
    image: boseHeadphones,
    images: [boseHeadphones, sonyHeadphones, airpodsMax],
    variants: [
      { id: 'v-qcu-1', title: 'White Smoke', price: 429.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White Smoke' }] },
      { id: 'v-qcu-2', title: 'Black', price: 429.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] },
      { id: 'v-qcu-3', title: 'Sandstone', price: 429.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Sandstone' }] }
    ],
    options: [
      { name: 'Color', values: ['White Smoke', 'Black', 'Sandstone'] }
    ]
  },
  {
    id: '45',
    title: 'JBL Flip 6',
    description: 'Portable Bluetooth speaker with powerful bass, 12-hour playtime, and IP67 waterproof rating.',
    handle: 'jbl-flip-6',
    tags: ['electronics', 'audio', 'speakers', 'jbl', 'featured'],
    price: 129.99,
    currencyCode: 'USD',
    image: jblSpeaker,
    images: [jblSpeaker, smartSpeaker, headphonesPro],
    variants: [
      { id: 'v-flip6-1', title: 'Black', price: 129.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] },
      { id: 'v-flip6-2', title: 'Blue', price: 129.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Blue' }] },
      { id: 'v-flip6-3', title: 'Red', price: 129.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Red' }] },
      { id: 'v-flip6-4', title: 'Teal', price: 129.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Teal' }] }
    ],
    options: [
      { name: 'Color', values: ['Black', 'Blue', 'Red', 'Teal', 'Grey', 'Pink'] }
    ]
  },
  {
    id: '46',
    title: 'Gaming Headset RGB',
    description: '7.1 surround sound gaming headset with RGB lighting, noise-cancelling mic, and memory foam cushions.',
    handle: 'gaming-headset-rgb',
    tags: ['electronics', 'audio', 'headphones', 'gaming'],
    price: 89.99,
    currencyCode: 'USD',
    image: gamingHeadset,
    images: [gamingHeadset, headphonesPro, sonyHeadphones],
    variants: [
      { id: 'v-gaminghs-1', title: 'Black/Red', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black/Red' }] },
      { id: 'v-gaminghs-2', title: 'Black/Blue', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black/Blue' }] },
      { id: 'v-gaminghs-3', title: 'White', price: 89.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['Black/Red', 'Black/Blue', 'White'] }
    ]
  },
  {
    id: '47',
    title: 'Smart Speaker',
    description: 'Voice-controlled smart speaker with premium audio and smart home integration.',
    handle: 'smart-speaker',
    tags: ['electronics', 'audio', 'speakers', 'smart-home'],
    price: 99.99,
    currencyCode: 'USD',
    image: smartSpeaker,
    images: [smartSpeaker, jblSpeaker],
    variants: [
      { id: 'v-smartspk-1', title: 'Space Gray', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Space Gray' }] },
      { id: 'v-smartspk-2', title: 'White', price: 99.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['Space Gray', 'White'] }
    ]
  },
  {
    id: '48',
    title: 'Wireless Headphones Pro',
    description: 'Studio-quality wireless headphones with active noise cancellation and premium cushioning.',
    handle: 'wireless-headphones-pro',
    tags: ['electronics', 'audio', 'headphones'],
    price: 299.99,
    currencyCode: 'USD',
    image: headphonesPro,
    images: [headphonesPro, sonyHeadphones, boseHeadphones],
    variants: [
      { id: 'v-whpro-1', title: 'Black', price: 299.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '49',
    title: 'Wireless Earbuds',
    description: 'Compact wireless earbuds with charging case, crystal-clear sound, and comfortable fit.',
    handle: 'wireless-earbuds',
    tags: ['electronics', 'audio', 'earbuds'],
    price: 149.99,
    currencyCode: 'USD',
    image: earbudsWireless,
    images: [earbudsWireless, airpodsPro, oraimoFreepods],
    variants: [
      { id: 'v-earbuds-1', title: 'White', price: 149.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['White'] }
    ]
  },

  // ==================== ACCESSORIES (6 Products) ====================
  {
    id: '50',
    title: 'Power Bank 20000mAh',
    description: 'High-capacity portable charger with fast charging, dual USB-C ports, and LED display.',
    handle: 'power-bank-20000',
    tags: ['electronics', 'accessories', 'charging', 'new-arrival'],
    price: 49.99,
    currencyCode: 'USD',
    image: powerBank,
    images: [powerBank, wirelessCharger],
    variants: [
      { id: 'v-powerbank-1', title: '20000mAh / Black', price: 49.99, availableForSale: true, selectedOptions: [{ name: 'Capacity', value: '20000mAh' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-powerbank-2', title: '20000mAh / White', price: 49.99, availableForSale: true, selectedOptions: [{ name: 'Capacity', value: '20000mAh' }, { name: 'Color', value: 'White' }] },
      { id: 'v-powerbank-3', title: '30000mAh / Black', price: 69.99, availableForSale: true, selectedOptions: [{ name: 'Capacity', value: '30000mAh' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Capacity', values: ['10000mAh', '20000mAh', '30000mAh'] },
      { name: 'Color', values: ['Black', 'White'] }
    ]
  },
  {
    id: '51',
    title: 'Wireless Charging Pad',
    description: 'Fast wireless charger with Qi compatibility, LED indicator, and sleek minimalist design.',
    handle: 'wireless-charging-pad',
    tags: ['electronics', 'accessories', 'charging'],
    price: 39.99,
    currencyCode: 'USD',
    image: wirelessCharger,
    images: [wirelessCharger, powerBank],
    variants: [
      { id: 'v-wirelesspad-1', title: 'Black', price: 39.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] },
      { id: 'v-wirelesspad-2', title: 'White', price: 39.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'White' }] }
    ],
    options: [
      { name: 'Color', values: ['Black', 'White'] }
    ]
  },
  {
    id: '52',
    title: 'Premium Hoodie',
    description: 'Ultra-soft premium hoodie with kangaroo pocket and adjustable drawstring hood.',
    handle: 'premium-hoodie',
    tags: ['fashion', 'clothing', 'hoodies', 'featured'],
    price: 79.99,
    currencyCode: 'USD',
    image: hoodieBlack,
    images: [hoodieBlack, hoodieNavy, hoodieBurgundy],
    variants: [
      { id: 'v-hoodie-1', title: 'S / Black', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-hoodie-2', title: 'M / Black', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-hoodie-3', title: 'L / Navy', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Navy' }] },
      { id: 'v-hoodie-4', title: 'XL / Burgundy', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'XL' }, { name: 'Color', value: 'Burgundy' }] }
    ],
    options: [
      { name: 'Size', values: ['S', 'M', 'L', 'XL', 'XXL'] },
      { name: 'Color', values: ['Black', 'Navy', 'Burgundy'] }
    ]
  },
  {
    id: '53',
    title: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable cotton t-shirt with a classic fit. Perfect for everyday wear.',
    handle: 'premium-cotton-tshirt',
    tags: ['fashion', 'clothing', 'casual'],
    price: 29.99,
    currencyCode: 'USD',
    image: tshirtBlack,
    images: [tshirtBlack],
    variants: [
      { id: 'v-tshirt-1', title: 'S / Black', price: 29.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-tshirt-2', title: 'M / Black', price: 29.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-tshirt-3', title: 'L / Black', price: 29.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['S', 'M', 'L', 'XL'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '54',
    title: 'Classic Sunglasses',
    description: 'Timeless sunglasses with UV protection and sleek design. Essential accessory for sunny days.',
    handle: 'classic-sunglasses',
    tags: ['fashion', 'accessories', 'eyewear'],
    price: 49.99,
    currencyCode: 'USD',
    image: sunglassesBlack,
    images: [sunglassesBlack],
    variants: [
      { id: 'v-sunglasses-1', title: 'Black', price: 49.99, availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '55',
    title: 'Leather Jacket',
    description: 'Premium leather jacket with classic biker design. Crafted from genuine leather.',
    handle: 'leather-jacket',
    tags: ['fashion', 'clothing', 'outerwear', 'premium'],
    price: 299.99,
    currencyCode: 'USD',
    image: jacketLeather,
    images: [jacketLeather],
    variants: [
      { id: 'v-leatherjkt-1', title: 'M / Black', price: 299.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Black' }] },
      { id: 'v-leatherjkt-2', title: 'L / Black', price: 299.99, availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Black' }] }
    ],
    options: [
      { name: 'Size', values: ['M', 'L'] },
      { name: 'Color', values: ['Black'] }
    ]
  },
  {
    id: '56',
    title: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with perfect fit and durability. Crafted from premium denim fabric.',
    handle: 'classic-denim-jeans',
    tags: ['fashion', 'clothing', 'denim'],
    price: 79.99,
    currencyCode: 'USD',
    image: jeansDenim,
    images: [jeansDenim],
    variants: [
      { id: 'v-jeans-1', title: '30 / Blue', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Waist', value: '30' }, { name: 'Color', value: 'Blue' }] },
      { id: 'v-jeans-2', title: '32 / Blue', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Waist', value: '32' }, { name: 'Color', value: 'Blue' }] },
      { id: 'v-jeans-3', title: '34 / Blue', price: 79.99, availableForSale: true, selectedOptions: [{ name: 'Waist', value: '34' }, { name: 'Color', value: 'Blue' }] }
    ],
    options: [
      { name: 'Waist', values: ['30', '32', '34'] },
      { name: 'Color', values: ['Blue'] }
    ]
  }
];

// Helper functions
export const getProductByHandle = (handle: string): MockProduct | undefined => {
  return mockProducts.find(product => product.handle === handle);
};

export const getProductsByTag = (tag: string): MockProduct[] => {
  return mockProducts.filter(product => product.tags.includes(tag));
};

export const getFeaturedProducts = (): MockProduct[] => {
  return mockProducts.filter(product => product.tags.includes('featured'));
};

export const getProductsByCategory = (category: string): MockProduct[] => {
  const categoryMap: Record<string, string[]> = {
    'phones': ['smartphones', 'tablets'],
    'laptops': ['laptops', 'computers'],
    'sneakers': ['sneakers', 'footwear'],
    'watches': ['watches', 'wearables'],
    'audio': ['audio', 'headphones', 'earbuds', 'speakers'],
    'fashion': ['clothing', 'accessories', 'eyewear']
  };
  
  const tags = categoryMap[category] || [category];
  return mockProducts.filter(product => 
    product.tags.some(tag => tags.includes(tag))
  );
};
