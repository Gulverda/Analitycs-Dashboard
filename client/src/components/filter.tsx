// 📁 src/components/filter.tsx

interface FilterProps {
  range: string;
  setRange: (val: string) => void;
}

const Filter = ({ range, setRange }: FilterProps) => {
  return (
    <div className="mt-4">
      <label htmlFor="range" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        თარიღის დიაპაზონი:
      </label>
      <div className="flex items-center gap-2">
        <select
          id="range"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2"
        >
          <option value="7">ბოლო 7 დღე</option>
          <option value="30">ბოლო 30 დღე</option>
          <option value="90">ბოლო 3 თვე</option>
          <option value="365">ბოლო წელიწადი</option>
        </select>
        <button
          onClick={() => alert(`არჩეული დიაპაზონი: ბოლო ${range} დღე`)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
        >
          გამოყენება
        </button>
      </div>
    </div>
  );
};

export default Filter;