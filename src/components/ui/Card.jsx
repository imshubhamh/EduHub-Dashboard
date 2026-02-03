
import { useNavigate } from 'react-router-dom'

export default function Card({ title, description, path, icon: Icon }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:bg-indigo-50 transition flex flex-col justify-between"
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-indigo-600" />}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  )
}

