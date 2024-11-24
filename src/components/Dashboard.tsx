import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, CheckSquare, MessageSquare, Bell, Users, FileText } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const isClient = user?.role === 'client';

  const stats = [
    {
      id: 1,
      name: isClient ? 'Active Projects' : 'Current Jobs',
      stat: '12',
      icon: FileText,
      change: '↑ 2 from last month',
      changeType: 'increase',
    },
    {
      id: 2,
      name: isClient ? 'Hired Contractors' : 'Completed Projects',
      stat: '24',
      icon: Users,
      change: '↑ 5 from last month',
      changeType: 'increase',
    },
    {
      id: 3,
      name: 'Messages',
      stat: '8',
      icon: MessageSquare,
      change: '3 unread',
      changeType: 'neutral',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isClient ? 'Client Dashboard' : 'Contractor Dashboard'}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Welcome back! Here's an overview of your {isClient ? 'projects' : 'work'}.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-blue-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p className="ml-2 flex items-baseline text-sm font-semibold text-gray-600">
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Upcoming {isClient ? 'Deadlines' : 'Tasks'}</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <CheckSquare className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600">
                  {isClient
                    ? `Project ${item} milestone due in ${item * 2} days`
                    : `Complete task ${item} for Project X`}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Notifications</h2>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {isClient
                      ? `Contractor submitted a new update for Project ${item}`
                      : `Client reviewed your submission for Project ${item}`}
                  </p>
                  <p className="text-xs text-gray-400">{item * 2}h ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}