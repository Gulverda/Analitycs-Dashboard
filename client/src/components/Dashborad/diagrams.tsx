import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const lineChartData = [
  { day: 'ორშ', მომხმარებლები: 400, ნახვები: 2400 },
  { day: 'სამ', მომხმარებლები: 300, ნახვები: 2210 },
  { day: 'ოთხ', მომხმარებლები: 500, ნახვები: 2290 },
  { day: 'ხუთ', მომხმარებლები: 278, ნახვები: 2000 },
  { day: 'პარ', მომხმარებლები: 189, ნახვები: 2181 },
  { day: 'შაბ', მომხმარებლები: 239, ნახვები: 2500 },
  { day: 'კვი', მომხმარებლები: 349, ნახვები: 2100 },
];

const pieChartData = [
  { name: 'პირდაპირი', value: 400 },
  { name: 'ძიება', value: 300 },
  { name: 'რეფერალი', value: 300 },
  { name: 'სოციალური', value: 200 },
];

const barChartData = [
  { category: 'ტექნიკა', გაყიდვები: 2400 },
  { category: 'ტანსაცმელი', გაყიდვები: 1398 },
  { category: 'სპორტი', გაყიდვები: 9800 },
  { category: 'სახლი', გაყიდვები: 3908 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const Diagrams = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow border">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">მომხმარებლის ყოველდღიური ტენდენციები</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="მომხმარებლები" stroke="#8884d8" />
            <Line type="monotone" dataKey="ნახვები" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow border">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">ტრაფიკის წყაროები</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ percent = 0 }) => `${(percent * 100).toFixed(0)}%`}
            >
              {pieChartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-4 rounded-xl shadow border">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">გაყიდვები კატეგორიების მიხედვით</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barChartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="გაყიდვები" fill="#ffc658" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Diagrams;
