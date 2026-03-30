import { Users, Activity, ClipboardList, ShieldCheck, Cpu, Database, Wifi } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import Badge from '../components/Badge';
import { mockEncounters, monthlyIntakeData } from '../data/mockFhir';

interface TooltipPayload {
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-2">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-[#00d4ff]">{payload[0].value} patients</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const recentEncounters = mockEncounters.slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Patients" value="2,847" change="3.2%" changePositive icon={Users} accentColor="cyan" />
        <StatCard title="Active Encounters" value="142" change="1.8%" changePositive icon={ClipboardList} accentColor="purple" />
        <StatCard title="Observations Today" value="891" change="5.1%" changePositive icon={Activity} accentColor="green" />
        <StatCard title="Compliance Rate" value="98.7%" change="0.3%" changePositive icon={ShieldCheck} accentColor="orange" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="xl:col-span-2 bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-white">Patient Intake Trend</h2>
              <p className="text-xs text-gray-400 mt-0.5">Last 12 months · All facilities</p>
            </div>
            <span className="text-xs bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 px-2.5 py-1 rounded-full">+12.4% YoY</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyIntakeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
              <XAxis dataKey="month" stroke="#4b5563" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis stroke="#4b5563" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#00d4ff"
                strokeWidth={2}
                dot={{ fill: '#00d4ff', r: 3, strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#00d4ff', stroke: '#00d4ff33', strokeWidth: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* System Health */}
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
          <h2 className="text-base font-semibold text-white mb-4">System Health</h2>
          <div className="space-y-4">
            {[
              { icon: Cpu, label: 'FHIR Server', value: '99.9%', status: 'Operational' },
              { icon: Database, label: 'Database', value: '23ms', status: 'Optimal' },
              { icon: Wifi, label: 'API Gateway', value: '99.7%', status: 'Operational' },
              { icon: ShieldCheck, label: 'Compliance Engine', value: '100%', status: 'Active' },
            ].map(({ icon: Icon, label, value, status }) => (
              <div key={label} className="flex items-center justify-between p-3 bg-[#0a0a0f] rounded-lg border border-[#1e1e2e]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{label}</p>
                    <p className="text-xs text-gray-500">{status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-emerald-400">{value}</p>
                  <div className="flex items-center gap-1 justify-end">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Encounters */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl">
        <div className="px-6 py-4 border-b border-[#1e1e2e] flex items-center justify-between">
          <h2 className="text-base font-semibold text-white">Recent Encounters</h2>
          <a href="/encounters" className="text-xs text-[#00d4ff] hover:underline">View all →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1e1e2e]">
                {['Patient', 'Date', 'Type', 'Provider', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentEncounters.map((enc) => (
                <tr key={enc.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-white">{enc.patientName}</p>
                    <p className="text-xs text-gray-500">{enc.reason}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {new Date(enc.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{enc.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{enc.provider}</td>
                  <td className="px-6 py-4"><Badge status={enc.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
