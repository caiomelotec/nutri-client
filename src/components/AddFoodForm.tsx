export const AddFoodForm = () => {
  return (
    <div className="border border-sky-300 px-3 py-8 rounded-md flex justify-center items-center w-full flex-col md:w-4/12">
      <h1 className="py-4 font-semibold text-sky-800 text-lg">Please enter the nutritional values based on 100g per serving.</h1>
      <form  className="flex flex-col justify-center items-center gap-2 md:w-3/4">
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label  className="font-semibold text-xl dark:text-white">Food Name:</label>
          <input className="border-2 md:w-1/2 rounded-md border-slate-300 py-1" type="text" />
        </div>{" "}
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label className="font-semibold text-xl dark:text-white">Calories:</label>
          <input className="border-2  md:w-1/2 rounded-md border-slate-300 py-1" type="number" />
        </div>
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label className="font-semibold text-xl dark:text-white">Carbohydrates:</label>
          <input className="border-2 md:w-1/2 rounded-md border-slate-300 py-1" type="number" />
        </div>
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label className="font-semibold text-xl dark:text-white">Fat:</label>
          <input className="border-2  md:w-1/2 rounded-md border-slate-300 py-1" type="number" />
        </div>
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label className="font-semibold text-xl dark:text-white">Protein:</label>
          <input className="border-2  md:w-1/2 rounded-md border-slate-300 py-1" type="number" />
        </div>
        <div className="w-full flex md:flex-row justify-between flex-col">
          <label className="font-semibold text-xl dark:text-white">Fiber:</label>
          <input className="border-2  md:w-1/2 rounded-md border-slate-300 py-1" type="number" />
        </div>
        <button className="bg-sky-600 hover:bg-sky-800 duration-300 text-white rounded px-3 py-1 my-2 font-semibold text-lg">Add Food</button>
      </form>
    </div>
  );
};
