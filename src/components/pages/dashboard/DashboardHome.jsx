
import DashboardLayout from '../../layout/DashboardLayout'
import Card from '../../ui/Card'

export default function DashboardHome() {
  const cards = [
    { title: 'Stats', description: 'View detailed stats', path: '/dashboard/stats' },
    { title: 'Activity', description: 'Check recent activity', path: '/dashboard/activity' },
    { title: 'Team Members', description: 'Manage team members', path: '/team/members' },
    { title: 'Roles', description: 'Manage team roles', path: '/team/roles' },
    { title: 'Monthly Reports', description: 'View monthly reports', path: '/reports/monthly' },
    { title: 'Annual Reports', description: 'View annual reports', path: '/reports/annual' },
  ]

  return (
    <DashboardLayout>
      <div className="">
        <h2 className="text-2xl font-bold">Dashboard Home</h2>
        <p className="mt-2 text-gray-600">Quick access to important sections</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              path={card.path}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
