import {Home,Flower2,Sun,HeartPulse,Palette, Sprout,} from "lucide-react";

const icons = {
  "Indoor Plants": Home,
  "Outdoor Plants": Sun,
  "Flowering Plants": Flower2,
  Succulents: Sprout,
  "Medicinal Plants": HeartPulse,
  "Decorative Plants": Palette,
};

const CategoryCard = ({ category, image, onClick }) => {
  const Icon = icons[category] || Sprout;

  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

        <div className="absolute top-4 left-4 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-green-700">
          <Icon size={21} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-green-950">
          {category}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Explore our collection
        </p>
      </div>
    </button>
  );
};

export default CategoryCard;