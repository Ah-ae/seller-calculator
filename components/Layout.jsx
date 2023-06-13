import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="h-screen dark:bg-dark-blue-200 dark:text-dark-blue-100">
      <Header />
      <main>{children}</main>
    </div>
  );
}
