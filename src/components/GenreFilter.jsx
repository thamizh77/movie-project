const GenreFilter = ({ genrelist, setselectgenre }) => {
  return (
    <select className="p-3 bg-blue-600 text-white rounded-md border mb-4 cursor-pointer backdrop-blur-md" onChange={(e) => setselectgenre(e.target.value)}>
      <option>All Genre</option>
      {genrelist.map((genre) => {
        return (
          <option key={genre} value={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};
 
export default GenreFilter;