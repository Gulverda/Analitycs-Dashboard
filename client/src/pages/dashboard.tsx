import { useState } from 'react';
import Filter from '../components/filter';
import KPICards from '../components/Dashborad/kpiCards';
import Diagrams from '../components/Dashborad/diagrams';
import LastActivities from '../components/Dashborad/lastActivities';

const Dashboard = () => {
  const [range, setRange] = useState('7');

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">ანალიტიკის დაფა</h1>
        <p className="text-gray-600 dark:text-gray-300">თქვენი ძირითადი შესრულების ინდიკატორების დეტალური მიმოხილვა.</p>
        <Filter range={range} setRange={setRange} />
      </div>
      <KPICards />
      <Diagrams />
      <LastActivities />
    </div>
  );
};

export default Dashboard;