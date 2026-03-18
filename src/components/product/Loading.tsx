export const ProductLoading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 animate-pulse">
      <div className="lg:col-span-7 space-y-4">
        <div className="w-full aspect-4/3 lg:aspect-16/10 max-h-100 rounded-2xl bg-gray-200 dark:bg-gray-700" />
        <div className="flex gap-2 overflow-x-auto pb-2">
          {new Array(5).fill(0).map((_, i) => (
            <div
              key={i}
              className="relative w-20 h-20 shrink-0 rounded-xl bg-gray-300 dark:bg-gray-600"
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col space-y-4">
        <div className="rounded-2xl shadow-sm p-5 flex flex-col gap-3 bg-gray-200 dark:bg-gray-700">
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
            <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-5 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
          <div className="mt-4">
            <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-10 mt-5 space-y-2">
        <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mt-2" />
      </div>
    </div>
  );
};
