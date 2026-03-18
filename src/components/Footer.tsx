/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-5 sm:px-10 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-lg">Company</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Удобный маркетплейс недвижимости. Находим лучшие объявления быстро и
            безопасно.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Объявления
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>📞 +992 070 25 77 99</li>
            <li>✉️ abdullaevusmon2006@gmail.com</li>
            <li>📍 Душанбе, Таджикистан</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Company. Все права защищены.
      </div>
    </footer>
  );
};
