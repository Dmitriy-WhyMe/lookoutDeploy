export const getPhotoSize = (width) => {
    if (width < 768) {
        return '360'
    }

    if (width >= 1770) {
        return '1920'
    }

    if (width <= 1280 && width >= 1024) {
        return '1024'
    }

    if (width <= 1023 && width >= 768) {
        return '768'
    }

    return '1440'
}
