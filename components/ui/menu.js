export function Menu({ children }) {
  return <nav className="flex gap-4">{children}</nav>;
}

export function MenuItem({ children }) {
  return (
    <span className="cursor-pointer text-sm text-gray-700 hover:underline">
      {children}
    </span>
  );
}
