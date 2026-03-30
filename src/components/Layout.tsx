import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Dashboard', subtitle: 'Clinical operations overview' },
  '/patients': { title: 'Patient Registry', subtitle: 'FHIR R4 Patient resources' },
  '/clinical-records': { title: 'Clinical Records', subtitle: 'Observations & Conditions' },
  '/encounters': { title: 'Encounter History', subtitle: 'Patient encounter log' },
  '/medications': { title: 'Medications', subtitle: 'MedicationRequest resources' },
  '/reports': { title: 'Reports', subtitle: 'Analytics & compliance reporting' },
};

export default function Layout() {
  const location = useLocation();
  const isPatientDetail = location.pathname.startsWith('/patients/') && location.pathname !== '/patients';
  const pageInfo = pageTitles[location.pathname] || { title: 'Frontier Health', subtitle: 'Healthcare Platform' };

  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {!isPatientDetail && (
          <TopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
        )}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
