// Utility functions
import _ from 'lodash'
const cloneDeep = _.cloneDeep

// Function to calculate the height of a row of images
export function getRowHeight(images, width, gutter) {
    const realWidth = width - images.length * gutter + gutter;

    const ratio = images.reduce((sum, image) => sum + image.width / image.height, 0);

    return realWidth / ratio;
}

// Function to update the list of processed images
export function updateProcessedImageList(processImageList, selectedImages, rowHeight, currentHeight, rowIndex, gutterWidth) {
    let currentWidth = 0;
    selectedImages.forEach((imageItem, i) => {
        const ratio = rowHeight / imageItem.height;
        const width = imageItem.width * ratio;

        const left = i === 0 ? 0 : currentWidth;
        const top = currentHeight;
        currentWidth += width + gutterWidth;

        processImageList.push({
            url: imageItem.url,
            alt: imageItem.alt,
            width,
            height: rowHeight,
            rowOffset: rowIndex,
            left,
            top,
            originalData: imageItem
        });
    });

    return processImageList;
}

export function curateImageList(images, width, setting) {

    const { gutter, rows, maxRowHeight, showIncompleteRow } = setting;
    const rowWidth = width;
    let imageList = cloneDeep(images);

    let processedImageList = [];
    let rowIndex = 0;
    let currentHeight = 0;
  

    while (imageList.length > 0 && (rows === undefined || rows > rowIndex)) {
        let height = 0;
        let isFulfilled = false;
        let offset = 0;
        let selectedImages = [];

        imageList.some(() => {
            selectedImages = imageList.slice(0, offset + 1);
            height = getRowHeight(selectedImages, rowWidth, gutter);
            isFulfilled = height <= maxRowHeight;
            if (!isFulfilled) {
                offset += 1;
                return false;
            }

            processedImageList = updateProcessedImageList(processedImageList, selectedImages, height, currentHeight, rowIndex, gutter);
            currentHeight += height + gutter;
            return true;
        });

        if (!isFulfilled) {
            if (showIncompleteRow) {
                processedImageList = updateProcessedImageList(processedImageList, selectedImages, maxRowHeight, currentHeight, rowIndex, gutter);
            }
            return processedImageList;
        }

        imageList = cloneDeep(images).slice(processedImageList.length);
        rowIndex += 1;
    }
 
    return processedImageList;
}