import { stats } from "../data";

const Stats = () => {
  return (
    <section className="stats-container">
      <div className="stats-row">
        {stats.map((stat) => {
          return (
            <article key={stat.id}>
              <h2>{stat.stat}</h2>
              <p>{stat.subtext}</p>
            </article>
          );
        })}
      </div>
      <div className="progress-bar">
        <div className="progress">{/* CSS */}</div>
      </div>
    </section>
  );
};

export default Stats;
