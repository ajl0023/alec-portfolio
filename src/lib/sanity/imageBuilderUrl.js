//finish this file
import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import { dev } from '$app/environment'
import { getImages } from '../utils/utils'
import { image_url } from '../dev'

const builder = imageUrlBuilder(client)

function getDevImageURL(url) {
    //extract file from url when dev and when not dev simply pass the url


}

export function sanityAssetUrl(source) {


    if (dev) {


        return image_url + source.split('/').pop()
    }
    return source
}
