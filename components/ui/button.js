export function Button({ children, onClick, variant = "default", className }) {
  const style = variant === "outline" ? "border px-3 py-1" : "bg-blue-600 text-white px-3 py-1";
  return <button className={`${style} rounded ${className}`} onClick={onClick}>{children}</button>;
}
