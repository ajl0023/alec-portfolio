// import { getImages } from '$lib/utils/utils.js';



// export async function load({ params, fetch }) {


//     return
//     // const { id } = params;
//     // const page_data = await fetch('')
//     // return await getImages('gallery_images')
// }

import client from '$lib/sanity/client';


export const load = async (event) => {
    const data = await client.fetch(`*[_type == "reel"]`);
    
    return {
        reel_videos: data
    }

};