import {supabase} from "../client";  // adjust path as needed
import { useState, useRef } from "react";
import cloud from '../assets/cloud.png'
const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

export default function FileDropZone({ onFilesChange, onUploadSuccess }) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const addFiles = (incoming) => {
    console.log(incoming);
    const newFiles = Array.from(incoming).map((f) => ({
      id: `${f.name}-${Date.now()}-${Math.random()}`,
      name: f.name,
      size: f.size,
      raw: f,
    }));
    setFiles((prev) => {
      const updated = [...prev, ...newFiles];
      onFilesChange?.(updated.map((f) => f.raw));
      return updated;
    });


  };

  // const removeFile = (id) => {
  //   setFiles((prev) => {
  //     const updated = prev.filter((f) => f.id !== id);
  //     onFilesChange?.(updated.map((f) => f.raw));
  //     return updated;
  //   });
  // };

 


  const ALLOWED_TYPES = [
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv'
]

const validateFile = (file) => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Only Excel and CSV files are allowed')
  }
  if (file.size > 10 * 1024 * 1024) {  // 10MB limit
    throw new Error('File size must be under 10MB')
  }
  return true
}

const uploadToStorage = async (file) => {
  const fileName = `${Date.now()}_${file.name}`  // unique name to avoid conflicts

  const { data, error } = await supabase.storage
    .from('sales')
    .upload(`uploads/${fileName}`, file)

  if (error) throw error

  return fileName
}

const getPublicUrl = (fileName) => {
  const { data } = supabase.storage
    .from('sales')
    .getPublicUrl(`uploads/${fileName}`)

  return data.publicUrl
}

const saveToDatabase = async (file, publicUrl) => {
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) throw new Error('User not logged in')

  const { data, error } = await supabase
    .from('job')
    .insert({
      file_path: publicUrl,
      file_name: file.name,
      status: 'pending',
      user_id: user.id,
    })

  if (error) throw error
  return data
}

const uploadFile = async (file) => {
  try {
    // 1. Validate
    validateFile(file)

    // 2. Upload to bucket
    const fileName = await uploadToStorage(file)

    // 3. Get public URL
    const publicUrl = getPublicUrl(fileName)

    // 4. Save URL to files table
    await saveToDatabase(file, publicUrl)
    await onUploadSuccess?.()
    
    console.log('File uploaded successfully!')


  } catch (error) {
    console.error('Upload failed:', error.message)
  }
}

 const onDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    const file = e.dataTransfer.files[0]  // grab the first dropped file
    if (file) uploadFile(file)
  };

  return (
    <div className="w-full  mx-auto">
      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`flex flex-col items-center justify-center gap-6 h-90 rounded-xl border-2 border-dashed cursor-pointer transition-colors duration-200 ${
          isDragging
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
        }`}
      >
        <img src={cloud} alt="Upload" className="w-16 h-16 " />
        <p className="text-lg text-black font-bold">
          {isDragging ? "Drop files here" : "Drag & drop files or click to browse"}
        </p>
        <p className="text-sm text-gray-500">
          Support for Excel (.xlsx, .xls) and CSV formats. Maximum
          file size up to 50MB.
        </p>

        <input
          ref={inputRef}
          type="file"
          multiple
          className = "hidden"
          // className='px-4 py-2 h-10 w-36  bg-[#1152D4] text-white rounded-md hover:bg-[#1152D4]/90 transition-colors duration-200'
          onChange={(e) => {
            const files = e.target.files;
            for (let i = 0; i < files.length; i++) {
              uploadFile(files[i]);
            }
          }}
        />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {files.map((file) => (
            <li
              key={file.id}
              className="flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400 flex-shrink-0">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                <span className="truncate text-gray-700 font-medium">{file.name}</span>
                <span className="text-gray-400 text-xs flex-shrink-0">{formatBytes(file.size)}</span>
              </div>
              {/* <button  
                onClick={() => removeFile(file.id)}
                className="ml-3 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button> */} {/* Remove button can be added back if needed, currently commented out to prevent file removal in this example */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}