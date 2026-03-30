import { useState } from 'react'
import { Code2 } from 'lucide-react'
import Card from '../components/ui/Card'
import JsonViewer from '../components/ui/JsonViewer'
import { patients } from '../data/patients'
import { observations } from '../data/observations'
import { appointments } from '../data/appointments'
import { conditions } from '../data/conditions'
import type { FhirResourceType } from '../types/fhir'

const resourceTypes: FhirResourceType[] = ['Patient', 'Observation', 'Condition', 'Appointment', 'Medication', 'MedicationRequest', 'Bundle', 'Practitioner']

const resourceData: Record<string, unknown[]> = {
  Patient: patients.map(p => p.fhir),
  Observation: observations.map(o => o.fhir),
  Appointment: appointments.map(a => a.fhir),
  Condition: conditions,
  Medication: [],
  MedicationRequest: [],
  Bundle: [
    {
      resourceType: 'Bundle',
      id: 'bundle-001',
      type: 'searchset',
      total: patients.length,
      entry: patients.slice(0, 3).map(p => ({ resource: p.fhir, fullUrl: `Patient/${p.id}` })),
    }
  ],
  Practitioner: [
    {
      resourceType: 'Practitioner',
      id: 'prac-001',
      name: [{ use: 'official', family: 'Rivera', given: ['Alex'], prefix: ['Dr.'] }],
      qualification: [{ code: { text: 'MD' }, identifier: [{ value: 'MD-12345' }] }],
    }
  ],
}

export default function FhirExplorer() {
  const [resourceType, setResourceType] = useState<FhirResourceType>('Patient')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const resources = resourceData[resourceType] || []
  const selectedResource = resources[selectedIndex]

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">FHIR Explorer</h1>
        <p className="text-sm text-[#64748b] mt-1">Browse and inspect FHIR R4 resources</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Resource Type Selector */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">Resource Types</h3>
            <div className="space-y-1">
              {resourceTypes.map(type => (
                <button
                  key={type}
                  onClick={() => { setResourceType(type); setSelectedIndex(0) }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    resourceType === type
                      ? 'bg-[#00d4ff15] text-[#00d4ff] border border-[#00d4ff30]'
                      : 'text-[#64748b] hover:text-white hover:bg-[#1a1f2e]'
                  }`}
                >
                  <span className="font-medium">{type}</span>
                  {resourceData[type]?.length ? (
                    <span className="ml-auto float-right text-xs opacity-60">{resourceData[type].length}</span>
                  ) : null}
                </button>
              ))}
            </div>
          </Card>

          {/* FHIR Info */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00ffcc]" />
              <span className="text-xs font-medium text-[#00ffcc]">FHIR R4</span>
            </div>
            <div className="text-xs text-[#64748b] space-y-1">
              <div>Version: 4.0.1</div>
              <div>Base URL: http://frontier.health/fhir/R4</div>
              <div>Resources: {Object.values(resourceData).reduce((a, b) => a + b.length, 0)} total</div>
            </div>
          </Card>
        </div>

        {/* Resource List + Viewer */}
        <div className="col-span-3 space-y-4">
          {/* Resource List */}
          {resources.length > 0 ? (
            <Card className="overflow-hidden">
              <div className="px-4 py-3 border-b border-[#1a1f2e] flex items-center gap-2">
                <Code2 size={14} className="text-[#00d4ff]" />
                <span className="text-sm font-medium text-white">{resourceType} Resources</span>
                <span className="text-xs text-[#64748b]">({resources.length} found)</span>
              </div>
              <div className="divide-y divide-[#1a1f2e] max-h-48 overflow-y-auto">
                {resources.map((res, i) => {
                  const r = res as Record<string, unknown>
                  const label = r.id as string || `Resource ${i + 1}`
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
                        selectedIndex === i ? 'bg-[#00d4ff08]' : 'hover:bg-[#0a0a0f]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${selectedIndex === i ? 'bg-[#00d4ff]' : 'bg-[#1a1f2e]'}`} />
                      <span className="text-xs font-mono text-[#64748b]">{resourceType}/{label}</span>
                    </button>
                  )
                })}
              </div>
            </Card>
          ) : (
            <Card className="p-8 text-center">
              <div className="text-[#64748b] text-sm">No {resourceType} resources in mock data</div>
            </Card>
          )}

          {/* JSON Viewer */}
          {selectedResource != null && (
            <JsonViewer
              data={selectedResource}
              title={`${resourceType}/${(selectedResource as Record<string, unknown>).id || selectedIndex}.json`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
