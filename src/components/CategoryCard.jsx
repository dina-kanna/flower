import { Sparkles, Heart, Gift, Crown, Flower, Flame, PartyPopper, SunMedium, Feather, Gem } from "lucide-react";

const categoryData = {
  "Fresh Bouquets": {
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",
  },
 "Romantic Roses": {
    icon: Heart,
    image: "https://images.stockcake.com/public/f/0/b/f0bd7784-dc2f-47c6-adb5-8584da3fcb0d/romantic-rose-elegance-stockcake.jpg",
  },
  "Luxury Arrangements": {
    icon: Crown,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
  },
 "Birthday & Celebration": {
    icon: Gift,
    image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=1000&q=80",
  },
"Exotic Orchids": {
    icon: Flower,
    image: "https://res.giftalove.com/resources/common/giftimages/largeimage/bright-roses-with-elegant-orchids.jpg",
},
  "Seasonal Specials": {
    icon: Flame,
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=1000&q=80",
  },
  "Wedding & Anniversary": {
    icon: Gem,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
  },

  "Sunny Sunflowers": {
    icon: SunMedium,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80",
  },
  "Graduation & Success": {
    icon: PartyPopper,
    image: "https://tse2.mm.bing.net/th/id/OIP.q_B1RxIRlx8s5QEjrmi_eQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
};

const CategoryCard = ({ category, image, onClick }) => {
  // Trim spaces and look up safely, with a robust fallback
  const trimmedCategory = category ? category.trim() : "";
  const catInfo = categoryData[trimmedCategory] || {
    icon: Flower,
    image: image || "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80",
  };

  const Icon = catInfo.icon;
  const displayImage = image || catInfo.image;

  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={displayImage}
          alt={category}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

        <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-rose-600 shadow-md">
          <Icon size={21} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
          {category}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Hand-arranged with fresh blooms 🌸
        </p>
      </div>
    </button>
  );
};

export default CategoryCard;