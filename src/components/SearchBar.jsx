import { Search, X } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search plants..."
        className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500"/>

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;