type TImageFileType = 'image/x-icon' | 'image/svg+xml' | 'image/bmp' | 'image/jpeg' | 'image/png' | 'image/webp'
type TColor = 'default' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'

export interface IBlogFileTypeColor {
    typeImg: TImageFileType
    color: TColor
}

export interface IBlogImageChip {
    fileInfo: File
    color: TColor
}

export const getFileTypeColor = (fileType: string): IBlogFileTypeColor => {
    const listFileTypeColor: IBlogFileTypeColor[] = [
        { typeImg: 'image/x-icon', color: 'error' },
        { typeImg: 'image/bmp', color: 'info' },
        { typeImg: 'image/jpeg', color: 'primary' },
        { typeImg: 'image/png', color: 'secondary' },
        { typeImg: 'image/svg+xml', color: 'success' },
        { typeImg: 'image/webp', color: 'warning' },
    ]
    const result = listFileTypeColor.filter(e => e.typeImg === fileType)
    return result.length ? result[0] : listFileTypeColor[0]
}