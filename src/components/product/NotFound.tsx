import Link from "next/link";

export const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 rounded-lg dark:bg-gray-900 text-center px-5 sm:px-10">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-gray-300 dark:text-gray-700 animate-bounce">
        😞
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold mt-4 text-gray-800 dark:text-gray-200">
        Объявление не найдено
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-4 max-w-lg">
        К сожалению, продукт с этим ID больше недоступен или был удалён.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Главная
        </Link>
        <Link
          href="/"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Все объявления
        </Link>
      </div>
    </div>
  );
};
