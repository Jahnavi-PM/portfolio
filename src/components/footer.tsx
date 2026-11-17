export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-2 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono tracking-wide">
          © {year} Jahnavi Kotana · Associate Product Manager
        </p>
        <p className="font-mono tracking-wide">Thanks for scrolling this far.</p>
      </div>
    </footer>
  );
}
