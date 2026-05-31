const COLUMNS = [
  { label: "Order ID",      type: "Numeric"  },
  { label: "Product name",  type: "Text"     },
  { label: "Price",         type: "Numeric"     },
  { label: "Category",      type: "Text"     },
  { label: "Sales/Revenue", type: "Currency" },
  { label: "Profit",        type: "Currency" },
  { label: "Region",        type: "Text"     },
  { label: "date",          type: "Date"     },
];

export default function RequiredDataStructure({ onDownload }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div className="flex-1 min-w-[200px]">
          <p className="text-sm font-semibold text-gray-900 mb-1">Required data structure</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            To ensure accurate analysis, please ensure your Excel or CSV file includes the following columns:
          </p>
        </div>
            <a  href="/structuredData.csv"
        download="template.csv"
        className="flex items-center gap-2 px-4 py-2 border-2 border-[#1152D4] text-[#1152D4] text-xs font-semibold rounded-lg hover:bg-[#EEF3FF] transition-colors shrink-0"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download template
      </a>
      </div>

      {/* Columns grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {COLUMNS.map((col) => (
          <div
            key={col.label}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <p className="text-[10px] font-semibold text-[#1152D4] uppercase tracking-wide mb-1">
              {col.label}
            </p>
            <p className="text-xs text-gray-600">{col.type}</p>
          </div>
        ))}
      </div>

    </div>
  );
}