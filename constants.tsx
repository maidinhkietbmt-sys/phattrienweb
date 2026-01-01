
import { Product, BlogPost } from './types';

export const COLORS = {
  primary: '#4E342E', // Nâu đậm
  secondary: '#D7CCC8', // Màu kem/be
  accent: '#C62828', // Đỏ đất
  green: '#388E3C', // Xanh nông trại
  dark: '#3E2723', // Nâu đen
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Robusta Honey - Vị Đậm Gu Việt',
    shortDescription: 'Đậm đà, hậu ngọt, hương thơm gỗ mục.',
    longDescription: 'Dòng Robusta được sơ chế theo phương pháp Honey giúp giữ lại lớp đường tự nhiên trên hạt, tạo nên vị ngọt hậu độc đáo và giảm bớt độ gắt đặc trưng của Robusta truyền thống.',
    priceBase: 120000,
    image: 'https://picsum.photos/seed/coffee1/800/800',
    origin: 'Buôn Ma Thuột, Đắk Lắk',
    altitude: '800m',
    processing: 'Honey Process',
    roastDate: 'Hôm qua',
    weights: [250, 500, 1000],
    tasteNotes: {
      bitterness: 8,
      acidity: 2,
      sweetness: 6,
      aroma: 5,
      body: 9
    }
  },
  {
    id: 'p2',
    name: 'Arabica Cầu Đất - Hương Hoa Trái',
    shortDescription: 'Chua thanh nhẹ nhàng, hương hoa quả tự nhiên.',
    longDescription: 'Những hạt Arabica chất lượng nhất từ độ cao 1600m tại Cầu Đất, Đà Lạt. Vị chua thanh thoát, hương thơm quyến rũ của các loại hạt và trái cây chín.',
    priceBase: 220000,
    image: 'https://picsum.photos/seed/coffee2/800/800',
    origin: 'Cầu Đất, Đà Lạt',
    altitude: '1600m',
    processing: 'Washed Process',
    roastDate: '2 ngày trước',
    weights: [250, 500, 1000],
    tasteNotes: {
      bitterness: 3,
      acidity: 9,
      sweetness: 7,
      aroma: 9,
      body: 4
    }
  },
  {
    id: 'p3',
    name: 'Signature Blend - Bản Giao Hưởng',
    shortDescription: 'Sự kết hợp hoàn hảo giữa Robusta và Arabica.',
    longDescription: 'Công thức độc quyền trộn giữa Robusta Honey và Arabica Cầu Đất theo tỉ lệ 7:3. Vừa có độ đậm của Robusta, vừa có hương thơm tinh tế của Arabica.',
    priceBase: 165000,
    image: 'https://picsum.photos/seed/coffee3/800/800',
    origin: 'Blend Mixed',
    altitude: 'Nhiều vùng',
    processing: 'Mixed',
    roastDate: '3 ngày trước',
    weights: [250, 500, 1000],
    tasteNotes: {
      bitterness: 6,
      acidity: 5,
      sweetness: 6,
      aroma: 7,
      body: 7
    }
  }
];

export const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Cách pha cà phê Phin chuẩn vị truyền thống',
    excerpt: 'Làm thế nào để có một ly cà phê phin sánh đậm, bốc khói mà không bị đắng khét?',
    image: 'https://picsum.photos/seed/phin/600/400',
    date: '10/10/2023',
    category: 'Hướng dẫn pha chế'
  },
  {
    id: 'b2',
    title: 'Cà phê rang mộc là gì?',
    excerpt: 'Tại sao cà phê rang mộc lại tốt cho sức khỏe hơn các loại cà phê tẩm ướp truyền thống?',
    image: 'https://picsum.photos/seed/roast/600/400',
    date: '08/10/2023',
    category: 'Kiến thức cà phê'
  }
];

export const GRIND_TYPES: {label: string, value: string}[] = [
  { label: 'Nguyên hạt (Whole Bean)', value: 'Whole Bean' },
  { label: 'Pha Phin (Medium)', value: 'Phin' },
  { label: 'Pha Máy (Fine)', value: 'Machine' },
  { label: 'Pour Over/V60 (Medium-Coarse)', value: 'Pour Over' },
  { label: 'Cold Brew (Coarse)', value: 'Cold Brew' },
];
