
import React from 'react';
import { TreePine, Waves, Flame, PackageCheck } from 'lucide-react';

const steps = [
  { icon: <TreePine className="w-8 h-8" />, title: 'Hái chín', desc: 'Chọn lọc 100% trái chín mọng' },
  { icon: <Waves className="w-8 h-8" />, title: 'Sơ chế', desc: 'Honey/Washed sạch tinh khiết' },
  { icon: <Flame className="w-8 h-8" />, title: 'Rang mộc', desc: 'Rang thủ công, không tẩm ướp' },
  { icon: <PackageCheck className="w-8 h-8" />, title: 'Xay & Gói', desc: 'Xay mới ngay khi bạn đặt hàng' },
];

const Process: React.FC = () => {
  return (
    <div className="py-16 bg-[#D7CCC8]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#4E342E]">Quy Trình Thủ Công</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4E342E] text-[#D7CCC8] rounded-full flex items-center justify-center mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">{step.title}</h3>
              <p className="text-sm text-stone-600 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
