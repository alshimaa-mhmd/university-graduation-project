import React, { useState } from 'react'
import FileDropZone from '../components/Filedropzone '
import RecentUploads from "../components/RecentUploads";

const DataUpload = () => {

  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <div className = "w-full flex flex-col gap-8 p-8 ">
         <FileDropZone onFilesChange={(files) => console.log(files)} onUploadSuccess={() => setRefreshKey(k => k + 1)} />

          <RecentUploads refreshKey={refreshKey}  />
    </div>
  )
}

export default DataUpload
