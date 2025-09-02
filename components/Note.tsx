export default function Note({ children }) {
  return (
    <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-4 text-sm">
      <strong className="text-blue-700">Note:</strong> {children}
    </div>
  )
}
