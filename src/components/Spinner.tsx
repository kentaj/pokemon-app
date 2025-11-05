export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-40" role="status" aria-live="polite">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-brand-500 border-solid"></div>
      <span className="sr-only">Laddar...</span>
    </div>
  );
}