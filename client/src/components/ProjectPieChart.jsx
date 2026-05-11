import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
];

const ProjectPieChart = ({ projects }) => {

  const data = projects.map((proj) => ({
    name: `${proj.title} (${proj.tech?.join(", ")})`,
    value: 1, // each project = 1 slice
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mx-4 my-6 -mt-0">
      <h2 className="text-xl font-semibold mb-4">
        Projects Overview
      </h2>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects available</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              innerRadius={50}
              label={({ percent }) =>
                `${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ProjectPieChart;