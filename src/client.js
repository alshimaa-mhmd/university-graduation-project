import {createClient} from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabaseUrl = 'https://lrgdipbkedultkaknebq.supabase.co'
const supabaseKey = 'sb_publishable_rZHGwdtzJKorc29-5jcpIA_ZN86cib0'

export const supabase = createClient(supabaseUrl, supabaseKey)