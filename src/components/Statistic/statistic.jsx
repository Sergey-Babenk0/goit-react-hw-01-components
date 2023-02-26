export const Statistic = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
