import React, { useRef, useState } from 'react'
import FileDropZone from '../components/Filedropzone '
import RecentUploads from "../components/RecentUploads";
import { useContext } from "react";
import DataContext from '../context/DataContext'
import { fetchResult } from "../api";
import NavContext from '../context/NavContext';
import ErrorPopup from '../components/ErrorPopup';
import RequiredDataStructure from '../components/RequiredDataStructure';

const DataUpload = () => {

  const [refreshKey, setRefreshKey] = useState(0);
  const { errorMsg, setData, setJobId } = useContext(DataContext);
  const { setNavLink } = useContext(NavContext);
  const abortControllerRef = useRef(null);
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchErr, setFetchErr] = useState("");
  const handleAction = async (record) => {
    
    if (record.status === "completed") {

      const resultData = await fetchResult(record.id); // fetches from result table
      setData(resultData);     //  populates all charts/cards
      setJobId(record.id);     //  sets the job ID
      // then navigate to your insights page
      setNavLink('overview')
    }
    if (record.status === "failed") {
      const resultData = await fetchResult(record.id); // fetches from result table
      setData(resultData);                            
      setErrMsg(true);
    }
    if (record.status === "pending") {
      record.status == "failed"
      
    }
  };

  return (
    <div className = "w-full flex flex-col gap-8 p-8 ">

      {errMsg && (
        <ErrorPopup
          message={errorMsg}
          onDismiss={() => setErrMsg(false)}
        />
      )}
      <FileDropZone 
      onFilesChange={(files) => console.log(files)} 
      onUploadSuccess={() => setRefreshKey(k => k + 1)}
      abortControllerRef={abortControllerRef}
      setLoading={setLoading} 
      setFetchErr={setFetchErr}
      />

      <RequiredDataStructure onDownload={()=>{}} />

      <RecentUploads 
      refreshKey={refreshKey} 
      onAction={handleAction}
      abortControllerRef={abortControllerRef}
      loading={loading}
      fetchErr={fetchErr}
      setFetchErr={setFetchErr}
      />
    </div>
  )
}

export default DataUpload
