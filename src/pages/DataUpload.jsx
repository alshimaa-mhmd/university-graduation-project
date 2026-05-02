import React, { useRef, useState } from 'react'
import FileDropZone from '../components/Filedropzone '
import RecentUploads from "../components/RecentUploads";
import { useContext } from "react";
import DataContext from '../context/DataContext'
import { fetchResult } from "../api";
import NavContext from '../context/NavContext';
import ErrorPopup from '../components/ErrorPopup';

const DataUpload = () => {

  const [refreshKey, setRefreshKey] = useState(0);
  const { errorMsg, setData } = useContext(DataContext);
  const { setNavLink } = useContext(NavContext);
  const abortControllerRef = useRef(null);
  const [errMsg, setErrMsg] = useState(false);

  const handleAction = async (record) => {
    if (record.status === "completed") {
      const resultData = await fetchResult(record.id); // fetches from result table
      setData(resultData);                             // 👈 populates all charts/cards
      // then navigate to your insights page, e.g.:
      setNavLink('overview')
    }
    if (record.status === "failed") {
      const resultData = await fetchResult(record.id); // fetches from result table
      setData(resultData);                             // 👈 populates all charts/cards
      
      setErrMsg(true);
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
      />

      <RecentUploads 
      refreshKey={refreshKey} 
      onAction={handleAction}
      abortControllerRef={abortControllerRef}
      />
    </div>
  )
}

export default DataUpload
