export default function ErrorPopup({ message, onDismiss }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="relative bg-gray-200 border border-gray-300 rounded-xl p-6 w-[380px]">

        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 5v4M8 11v.5" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="8" r="6.5" stroke="#A32D2D" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="font-medium text-gray-800">Upload failed</p>
        </div>

        <p className="text-sm text-gray-600 mb-5 leading-relaxed">{message}</p>

        <button
          onClick={onDismiss}
          className="w-full py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm font-medium text-gray-800 transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}