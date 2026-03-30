import { BarChart2, Download } from 'lucide-react';

export default function Reports() {
  return (
    <div className="p-6">
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 flex items-center justify-center mx-auto mb-4">
          <BarChart2 className="w-8 h-8 text-[#7c3aed]" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Compliance Reports</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Generate FHIR-compliant reports for regulatory submissions, clinical audits, and quality metrics.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/30 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#7c3aed]/20 transition-all">
          <Download className="w-4 h-4" />
          Generate Report
        </button>
      </div>
    </div>
  );
}
