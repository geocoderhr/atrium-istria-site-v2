import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-warm-orange">404</p>
        <h1 className="mb-4 text-4xl font-medium sm:text-5xl">Страница не найдена</h1>
        <p className="mb-8 text-lg leading-relaxed text-white/70">
          Похоже, адрес изменился или страница больше не существует. Вернём вас к актуальной версии сайта.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-orange-dark"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
