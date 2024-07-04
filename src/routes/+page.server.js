import { getImages } from '../lib/utils/utils.js';
import client from '$lib/sanity/client';


export async function load({ params, fetch }) {

    const data = await client.fetch(`*[_type == "home"]|order(orderRank)`);

    return {
        images: data
    }
}