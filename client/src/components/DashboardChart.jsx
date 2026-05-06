import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { motion } from "framer-motion";
import { Legend } from "recharts";

const DashboardChart = ({ projects, contacts }) => {
  const data = [
    { name: "Projects", value: projects.length },
    { name: "Contacts", value: contacts.length },
  ];

  const COLORS = ["#3B82F6", "#8B5CF6"]; // blue + purple

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* 🔵 BAR CHART */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Comparison</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* 🟣 PIE CHART */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              innerRadius={50}
              animationDuration={800}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* 🔥 LEGEND */}
            <Legend />

            {/* Tooltip */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default DashboardChart;
