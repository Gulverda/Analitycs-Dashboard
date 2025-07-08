const mockActivities = [
  { user: 'ლაშა ქავთარაძე', action: 'დაარეგისტრირა ანგარიში', time: '5 წთ წინ' },
  { user: 'ანა ქობულია', action: 'შეიძინა პროდუქტი', time: '12 წთ წინ' },
  { user: 'გიორგი შენგელია', action: 'შეცვალა პარამეტრები', time: '1 საათის წინ' },
  { user: 'თაკო კაპანაძე', action: 'დაამატა პროდუქტი კალათაში', time: '2 საათის წინ' },
  { user: 'საბა აბულაძე', action: 'გააუქმა შეკვეთა', time: '3 საათის წინ' },
];

const LastActivities = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow border overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">ბოლო აქტივობები</h3>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-gray-600 dark:text-gray-300 text-sm">
            <th className="py-2 px-4">მომხმარებელი</th>
            <th className="py-2 px-4">მოქმედება</th>
            <th className="py-2 px-4">დრო</th>
          </tr>
        </thead>
        <tbody>
          {mockActivities.map((activity, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2 px-4 text-gray-800 dark:text-white whitespace-nowrap">{activity.user}</td>
              <td className="py-2 px-4 text-gray-700 dark:text-gray-300 whitespace-nowrap">{activity.action}</td>
              <td className="py-2 px-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastActivities;
