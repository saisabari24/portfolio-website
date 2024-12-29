export function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent" />
      <span>Loading...</span>
    </div>
  );
} 