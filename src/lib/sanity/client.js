import { createClient } from "@sanity/client";


const client = createClient({
    projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
    stega: import.meta.env.VITE_PUBLIC_SANITY_STUDIO_URL,
});


export default client;