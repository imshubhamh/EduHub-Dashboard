export default function Button({ children }) {
    return (
      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
        {children}
      </button>
    )
  }
  