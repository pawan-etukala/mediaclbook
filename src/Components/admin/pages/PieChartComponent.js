// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const PieChartComponent = ({ title, data }) => {
//   return (
//     <div>
//       <h5>{title}</h5>
//       <PieChart width={300} height={300}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           label
//           outerRadius={100}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </div>
//   );
// };

// export default PieChartComponent;
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch data
    const fetchData = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            title: "Users by Category",
            data: [
              { name: "subscribed", value: 40 },
              { name: "bought book", value: 30 },
              { name: "bought chapter", value: 20 },
              { name: "no purchase yet", value: 10 },
            ],
          });
        }, 2000); // simulate 2 seconds delay
      });
      setTitle(response.title);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h5>{title}</h5>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
