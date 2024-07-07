// import { getImages } from '$lib/utils/utils.js';



// export async function load({ params, fetch }) {


//     return
//     // const { id } = params;
//     // const page_data = await fetch('')
//     // return await getImages('gallery_images')
// }

// static page



import client from '$lib/sanity/client';


export const load = async (event) => {
    const data = await client.fetch(`*[_type == "gallery"]|order(orderRank)

`);

    return {
        gallery_photos: data
    }

};