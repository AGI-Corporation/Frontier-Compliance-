import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import MedicalRecords from './pages/MedicalRecords'
import Appointments from './pages/Appointments'
import FhirExplorer from './pages/FhirExplorer'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="fhir" element={<FhirExplorer />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
