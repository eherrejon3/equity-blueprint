export default function notFound() {
  return (
    <div className="w-full max-h-189 h-screen flex flex-col gap-xl justify-center items-center">
      <h1 className="text-3xl font-semibold text-text font-heading2">
        Error 404
      </h1>
      <p className="text-lg text-text font-text">Page not found.</p>
    </div>
  );
}
