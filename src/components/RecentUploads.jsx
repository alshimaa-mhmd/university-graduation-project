import { useEffect, useState } from "react";
import {supabase} from "../client";














const fileIcon = (name) => {
  if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
    return (
      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h8M12 3v18" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
};

const StatusBadge = ({ status }) => {
  const config = {
    Processed: "bg-green-100 text-green-700 border border-green-200",
    pending : "bg-blue-100 text-blue-600 border border-blue-200",
    Failed: "bg-red-100 text-red-600 border border-red-200",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config[status] ?? "bg-slate-100 text-slate-500"}`}>
     
      {status}
       {status === "pending" && (
        <svg
  className="ml-3 size-5 animate-spin text-blue-500"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    className="opacity-25"
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="4"
  />
  <path
    className="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
  />
</svg>
      )}
    </span>
  );
};

const ActionButton = ({ status, onAction }) => {
  if (status === "Processed") {
    return (
      <button
        onClick={onAction}
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
      >
        View Insights
      </button>
    );
  }
  if (status === "Processing") {
    return (
      <button
        onClick={onAction}
        className="text-sm font-medium text-slate-400 hover:text-red-500 transition-colors"
      >
        Cancel
      </button>
    );
  }
  if (status === "Failed") {
    return (
      <button
        onClick={onAction}
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
      >
        Retry Upload
      </button>
    );
  }
  return null;
};

// ── Sample data ── replace with your dynamic source
const SAMPLE_DATA = [
  {
    id: 1,
    name: "Q3_Sales_Performance.csv",
    dateUploaded: "Oct 24, 2023 • 14:20",
    fileSize: "1.2 MB",
    status: "Processed",
  },
];

export default function RecentUploads({
  records = SAMPLE_DATA,
  totalRecords = 24,
  currentPage = 1,
  pageSize = 4,
  onPrev,
  onNext,
  onAction,
  onFilter,
  onRefresh,
  refreshKey,
}) {

    const [jobs, setJobs] = useState([])

 useEffect(() => {

    const controller = new AbortController();


  const fetchData = async () => {
      const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) throw new Error('User not logged in')
try{
let { data: job, error } = await supabase
  .from('job')
  .select("*")
  .eq('user_id', user.id)
  .order("created_at", { ascending: false })
  .abortSignal(controller.signal); // 👈 tie the request to the controller

     if (error) throw error;
    
        console.log('Fetched jobs:', job)
        setJobs(job)
} catch (err) {
  if (err.name === "AbortError") return; // 👈 silently ignore aborted requests
      console.error(err);   
}
    
    }
fetchData();

  
}, [ refreshKey ])


  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(start + records.length - 1, totalRecords);

  return (
    <div className=" flex items-center justify-center font-sans">
      <div className="w-full   rounded-2xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 bg-black">
          <h2 className="text-lg font-bold text-white tracking-tight">Recent Uploads</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onFilter}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Filter"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M11 12h2" />
              </svg>
            </button>
            <button
              onClick={onRefresh}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M5.635 19A9 9 0 104.582 9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto ">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {["File Name", "Date Uploaded", "File Size", "Status", "Action"].map((col, i) => (
                  <th
                    key={col}
                    className={`py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider ${i === 4 ? "text-right" : "text-left"}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jobs.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/60 transition-colors group">
                  {/* File Name */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {fileIcon(record.file_name)}
                      <span className="font-medium text-slate-800 group-hover:text-slate-900">
                        {record.file_name}
                      </span>
                    </div>
                  </td>
                  {/* Date */}
                  <td className="py-4 px-6 text-slate-500 whitespace-nowrap">
                    {record.created_at}
                  </td>
                  {/* Size */}
                  <td className="py-4 px-6 text-slate-500"> 1 MB </td>
                  {/* Status */}
                  <td className="py-4 px-6">
                    <StatusBadge status={record.status} />
                  </td>
                  {/* Action */}
                  <td className="py-4 px-6 text-right">
                    <ActionButton
                      status={record.status}
                      onAction={() => onAction?.(record)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <span className="text-sm text-slate-500">
            Showing {jobs.length} of {jobs.length} records
          </span>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              disabled={currentPage === 1}
              className="px-4 py-1.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              disabled={end >= totalRecords}
              className="px-4 py-1.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}