const SortButton = ({ sortConfig, setSortConfig }) => {
  const handleSort = (key) => {
    setSortConfig(prevState => {
      if (prevState.key === key && prevState.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return { key, direction: 'asc' };
    });
  };

  return (
    <div>
      <button onClick={() => handleSort('name')}>Ordenar por nombre</button>
      <button onClick={() => handleSort('population')}>Ordenar por población</button>
    </div>
  );
};

export default SortButton;



