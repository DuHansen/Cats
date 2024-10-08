import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';
import './style.css'; // Importa o CSS

function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );

    setGraph(graphData);
  }, [data]);

  return (
    <section className="StyledUserStatsGraphs">
      <div className="total graph-item">
        <p>Acessos: {total}</p>
      </div>
      <div className="graph-item">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className="graph-item">
        <VictoryChart>
          <VictoryBar alignment='start' data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
