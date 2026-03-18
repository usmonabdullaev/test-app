import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-5 sm:px-10">
      <h1 className="text-7xl sm:text-9xl font-extrabold text-gray-300 dark:text-gray-700 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold mt-4 text-gray-800 dark:text-gray-200">
        Страница не найдена
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-4 max-w-lg">
        Упс! Кажется, вы забрели не туда. Страница, которую вы ищете, не
        существует или была удалена.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Вернуться на главную
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          Все объявления
        </Link>
        <Link href="tel:+992070257799" className="hover:underline">
          Связаться с нами
        </Link>
      </div>
    </div>
  );
};
