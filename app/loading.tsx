export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" />
      <span className="text-indigo-300 ml-4 text-xl font-semibold">Loading...</span>
    </div>
  );
}
