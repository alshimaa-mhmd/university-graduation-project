import {supabase} from './client';  // adjust path as needed

const FASTAPI_URL = "https://velox-python-code.vercel.app"; // your deployed FastAPI

export const triggerAnalysis = async (jobId, signal) => {
  const res = await fetch(`${FASTAPI_URL}/analyze/${jobId}`, { method: "POST",  signal });
  if (!res.ok) throw new Error("Failed to trigger analysis");
};

export const fetchResult = async (jobId) => {
  const { data, error } = await supabase
    .from("result")
    .select("result_data")
    .eq("job_id", jobId)
    .single();
  if (error) throw error;
  return data.result_data;
};