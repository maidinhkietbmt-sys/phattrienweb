
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Instagram, Facebook, Mail, Phone, MapPin, CheckCircle2, Star } from 'lucide-react';
import { Product, CartItem, GrindOption } from './types';
import { SAMPLE_PRODUCTS, SAMPLE_POSTS, COLORS, GRIND_TYPES } from './constants';
import ProductCard from './components/ProductCard';
import TasteChart from './components/TasteChart';
import Process from './components/Process';
import ChatAdvisor from './components/ChatAdvisor';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<number>(250);
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('Whole Bean');
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculatePrice = (base: number, weight: number) => {
    if (weight === 250) return base;
    if (weight === 500) return base * 1.9; // Slight discount for 500g
    if (weight === 1000) return base * 3.5; // Bigger discount for 1kg
    return base;
  };

  const addToCart = (buyNow = false) => {
    if (!selectedProduct) return;
    const currentPrice = calculatePrice(selectedProduct.priceBase, selectedWeight);
    const newItem: CartItem = {
      product: selectedProduct,
      weight: selectedWeight,
      grind: selectedGrind,
      quantity,
      totalPrice: currentPrice * quantity
    };
    setCart(prev => [...prev, newItem]);
    if (!buyNow) {
      setSelectedProduct(null);
      setIsCartOpen(true);
    } else {
      // Simulate checkout
      alert("Chuyển đến trang thanh toán...");
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-[#D7CCC8] selection:text-[#4E342E]">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#4E342E] rounded-full flex items-center justify-center text-[#D7CCC8]">
              <span className="text-xl font-bold">HĐ</span>
            </div>
            <span className={`text-2xl font-bold heading-serif transition-colors ${scrolled ? 'text-stone-800' : 'text-white md:text-stone-800'}`}>Hương Đất Coffee</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className={`transition-colors ${scrolled ? 'hover:text-[#4E342E]' : 'text-white md:text-stone-800 hover:text-white/80'}`}>Trang Chủ</a>
            <a href="#products" className={`transition-colors ${scrolled ? 'hover:text-[#4E342E]' : 'text-white md:text-stone-800 hover:text-white/80'}`}>Cửa Hàng</a>
            <a href="#story" className={`transition-colors ${scrolled ? 'hover:text-[#4E342E]' : 'text-white md:text-stone-800 hover:text-white/80'}`}>Câu Chuyện</a>
            <a href="#blog" className={`transition-colors ${scrolled ? 'hover:text-[#4E342E]' : 'text-white md:text-stone-800 hover:text-white/80'}`}>Kiến Thức</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-stone-100 rounded-full transition-colors group"
            >
              <ShoppingCart className={`w-6 h-6 ${scrolled ? 'text-stone-800' : 'text-white md:text-stone-800'}`} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C62828] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="md:hidden"><Menu className={`w-6 h-6 ${scrolled ? 'text-stone-800' : 'text-white md:text-stone-800'}`} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/hero-coffee/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.4]" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-[#D7CCC8]/20 border border-[#D7CCC8]/30 rounded-full text-sm mb-6 uppercase tracking-widest backdrop-blur-sm">Thương Hiệu Từ Tâm</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Đánh Thức Vị Giác Với Cà Phê Mộc 100%</h1>
            <p className="text-lg md:text-xl mb-8 text-stone-300 font-light">Những hạt cà phê tinh hoa được thu hái thủ công từ vùng Buôn Ma Thuột & Cầu Đất, rang mộc giữ trọn hương vị nguyên bản của đại ngàn.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-[#4E342E] text-white px-8 py-4 rounded-md font-bold hover:bg-[#3E2723] transition-all transform hover:scale-105">Mua Ngay</a>
              <a href="#story" className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-md font-bold hover:bg-white/20 transition-all">Khám Phá Câu Chuyện</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Story */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-4 border-t-4 border-[#D7CCC8]"></div>
            <img 
              src="https://picsum.photos/seed/farmer/800/600" 
              alt="Farmer and coffee beans" 
              className="rounded-lg shadow-2xl relative z-10" 
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-[#4E342E]"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl mb-6 text-[#4E342E]">Từ Nông Trại Đến Ly Cà Phê Của Bạn</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>Mỗi hạt cà phê tại Hương Đất bắt đầu từ những cánh rừng tại Buôn Ma Thuột và đồi dốc Cầu Đất. Chúng tôi đồng hành cùng người nông dân để đảm bảo từng trái cà phê đạt độ chín hoàn hảo.</p>
              <p>Chúng tôi không chỉ bán cà phê, chúng tôi kể câu chuyện về sự cần mẫn, về vùng đất Bazan màu mỡ và tinh hoa của kĩ thuật rang mộc thủ công, không hóa chất, không phụ gia.</p>
            </div>
            <div className="mt-8 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E342E]">100%</div>
                <div className="text-sm text-stone-500">Nguyên chất</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E342E]">85+</div>
                <div className="text-sm text-stone-500">Điểm Cupping</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E342E]">3h</div>
                <div className="text-sm text-stone-500">Xay đóng gói</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#4E342E]">Sản Phẩm Chủ Lực</h2>
            <p className="text-stone-500">Tuyển chọn những dòng cà phê tốt nhất cho gu của bạn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={(p) => {
                  setSelectedProduct(p);
                  setSelectedWeight(250);
                  setQuantity(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Trust Badges */}
      <section className="py-12 bg-[#4E342E] text-[#D7CCC8]">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-8 h-8 opacity-70" />
            <span className="font-semibold text-sm uppercase">Không tẩm hương liệu</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-8 h-8 opacity-70" />
            <span className="font-semibold text-sm uppercase">Không trộn đậu/bắp</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-8 h-8 opacity-70" />
            <span className="font-semibold text-sm uppercase">Xay mới khi đặt</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-8 h-8 opacity-70" />
            <span className="font-semibold text-sm uppercase">Hoàn tiền 100%</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl mb-2 text-[#4E342E]">Góc Kiến Thức</h2>
              <p className="text-stone-500">Nghệ thuật thưởng thức và pha chế cà phê</p>
            </div>
            <a href="#" className="text-[#4E342E] font-bold border-b-2 border-[#4E342E] pb-1 hover:text-[#3E2723] transition-colors">Xem Tất Cả</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SAMPLE_POSTS.map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden rounded-xl mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex gap-4 items-center mb-3">
                  <span className="bg-stone-100 px-3 py-1 rounded-full text-xs font-semibold text-stone-600 uppercase">{post.category}</span>
                  <span className="text-stone-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4E342E] transition-colors">{post.title}</h3>
                <p className="text-stone-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#4E342E] rounded-full flex items-center justify-center text-[#D7CCC8]">
                  <span className="text-sm font-bold">HĐ</span>
                </div>
                <span className="text-xl font-bold text-white heading-serif">Hương Đất Coffee</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">Đưa cà phê Việt vươn tầm thế giới bằng chất lượng rang mộc thật và trách nhiệm với vùng nguyên liệu.</p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Liên Hệ</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 text-[#D7CCC8]" /> 123 Đường Cà Phê, Buôn Ma Thuột, Đắk Lắk</li>
                <li className="flex gap-3"><Phone className="w-4 h-4 shrink-0 text-[#D7CCC8]" /> 1900 888 999</li>
                <li className="flex gap-3"><Mail className="w-4 h-4 shrink-0 text-[#D7CCC8]" /> hello@huongdatcoffee.vn</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Chính Sách</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Vận chuyển & Giao nhận</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đổi trả & Hoàn tiền</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bảo mật thông tin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đại lý & Sỉ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Bản Tin</h4>
              <p className="text-xs mb-4">Nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email của bạn" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#4E342E]" />
                <button className="bg-[#4E342E] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#3E2723] transition-colors">Gửi</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs">
            © 2023 Hương Đất Coffee. All rights reserved. Chứng nhận VSATTP số 000/2023/ATTP.
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full md:w-1/2 overflow-hidden bg-stone-100">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
              <span className="text-xs font-bold text-[#388E3C] uppercase tracking-widest bg-green-50 px-2 py-1 rounded inline-block mb-2">Đang Rang Mới</span>
              <h2 className="text-3xl font-bold text-stone-800 mb-2">{selectedProduct.name}</h2>
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-stone-400 text-xs ml-2">(48 đánh giá)</span>
              </div>
              
              <div className="text-2xl font-bold text-[#C62828] mb-6">
                {calculatePrice(selectedProduct.priceBase, selectedWeight).toLocaleString('vi-VN')}₫
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-stone-500 uppercase mb-3">Chọn Khối Lượng</label>
                <div className="flex gap-3">
                  {selectedProduct.weights.map(w => (
                    <button 
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-4 py-2 rounded border-2 transition-all ${
                        selectedWeight === w 
                        ? 'border-[#4E342E] bg-[#4E342E] text-white' 
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      {w < 1000 ? `${w}g` : '1kg'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-stone-500 uppercase mb-3">Cách Xay (Yêu cầu)</label>
                <div className="grid grid-cols-2 gap-2">
                  {GRIND_TYPES.map(g => (
                    <button 
                      key={g.value}
                      onClick={() => setSelectedGrind(g.value as GrindOption)}
                      className={`px-3 py-2 rounded border text-xs transition-all text-left ${
                        selectedGrind === g.value 
                        ? 'border-[#4E342E] ring-1 ring-[#4E342E] font-bold' 
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-4 bg-stone-50 rounded-xl">
                <label className="block text-xs font-bold text-stone-500 uppercase mb-4 text-center">Biểu Đồ Hương Vị</label>
                <TasteChart notes={selectedProduct.tasteNotes} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-xs">
                <div className="p-3 border border-stone-100 rounded">
                  <span className="text-stone-400 block mb-1">Vùng trồng:</span>
                  <span className="font-bold">{selectedProduct.origin}</span>
                </div>
                <div className="p-3 border border-stone-100 rounded">
                  <span className="text-stone-400 block mb-1">Độ cao:</span>
                  <span className="font-bold">{selectedProduct.altitude}</span>
                </div>
                <div className="p-3 border border-stone-100 rounded">
                  <span className="text-stone-400 block mb-1">Sơ chế:</span>
                  <span className="font-bold">{selectedProduct.processing}</span>
                </div>
                <div className="p-3 border border-stone-100 rounded">
                  <span className="text-stone-400 block mb-1">Ngày rang:</span>
                  <span className="font-bold text-[#388E3C]">{selectedProduct.roastDate}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center border border-stone-200 rounded-md overflow-hidden">
                  <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="px-4 py-2 hover:bg-stone-100">-</button>
                  <span className="px-4 font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(q => q+1)} className="px-4 py-2 hover:bg-stone-100">+</button>
                </div>
                <button 
                  onClick={() => addToCart(false)}
                  className="flex-1 bg-[#4E342E] text-white font-bold py-3 rounded-md hover:bg-[#3E2723] transition-all uppercase tracking-wide"
                >
                  Thêm Vào Giỏ
                </button>
              </div>
              <button 
                onClick={() => addToCart(true)}
                className="w-full mt-4 border-2 border-[#C62828] text-[#C62828] font-bold py-3 rounded-md hover:bg-[#C62828] hover:text-white transition-all uppercase tracking-wide"
              >
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/60" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Giỏ Hàng ({cart.length})
              </h2>
              <button onClick={() => setIsCartOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-10 h-10 text-stone-300" />
                  </div>
                  <p className="text-stone-400">Giỏ hàng đang trống.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-[#4E342E] font-bold underline"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : (
                cart.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-stone-100">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-stone-800 group-hover:text-[#4E342E] transition-colors">{item.product.name}</h4>
                      <p className="text-xs text-stone-400 mb-1">{item.weight}g | {item.grind}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-stone-500">x{item.quantity}</span>
                        <span className="font-bold text-sm">{item.totalPrice.toLocaleString('vi-VN')}₫</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setCart(prev => prev.filter((_, idx) => idx !== i))}
                      className="text-stone-300 hover:text-red-500 self-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-100 space-y-4">
                <div className="flex justify-between items-center text-stone-500 text-sm">
                  <span>Tạm tính:</span>
                  <span>{cartTotal.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Tổng cộng:</span>
                  <span className="text-[#C62828]">{cartTotal.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="pt-2">
                  <div className="flex gap-2 mb-4">
                    <input placeholder="Mã giảm giá" className="flex-1 border border-stone-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4E342E]" />
                    <button className="bg-stone-200 px-4 py-2 rounded text-sm font-bold">Áp dụng</button>
                  </div>
                  <button className="w-full bg-[#4E342E] text-white font-bold py-4 rounded-md hover:bg-[#3E2723] transition-all uppercase tracking-widest text-sm shadow-lg">
                    Thanh Toán Ngay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating AI Coffee Advisor */}
      <ChatAdvisor />
    </div>
  );
};

export default App;
