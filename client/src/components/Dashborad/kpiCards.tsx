// 📁 src/components/dashboard/kpicards.tsx

import {
  Users,
  DollarSign,
  Eye,
  TrendingDown,
  Activity,
  Clock,
  TrendingUp,
} from 'lucide-react';

const kpiData = [
  { title: 'მომხმარებლები', value: '12,345', trend: '+15%', icon: Users, trendUp: true },
  { title: 'შემოსავალი', value: '$87,654', trend: '+8%', icon: DollarSign, trendUp: true },
  { title: 'გვერდის ნახვები', value: '154,321', trend: '-5%', icon: Eye, trendUp: false },
  { title: 'დაბრუნების მაჩვენებელი', value: '23%', trend: '+2%', icon: TrendingDown, trendUp: false },
  { title: 'ახალი რეგისტრაციები', value: '1,234', trend: '+12%', icon: Activity, trendUp: true },
  { title: 'საშუალო სესია', value: '5წ 32წმ', trend: '+3%', icon: Clock, trendUp: true },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {kpiData.map((kpi, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition border"
        >
          <div className="flex items-center gap-4">
            <kpi.icon className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{kpi.title}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
              <div
                className={`text-sm flex items-center gap-1 ${
                  kpi.trendUp ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {kpi.trendUp ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{kpi.trend}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
