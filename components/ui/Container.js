export default function Container({ children }) {
  return (
    <div className="mx-auto my-0 w-3/5 max-w-md max-md:w-full max-md:px-3">
      {children}
    </div>
  );
}
