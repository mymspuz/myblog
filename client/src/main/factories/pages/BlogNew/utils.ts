import { EditorState } from 'draft-js'
import { convertToHTML } from 'draft-convert'

const getStyleFromImg = (data: { height: string, width: string, src: string, alignment?: string }): string => {
    const alignment = data.alignment ? data.alignment : 'none'
    return `src="${data.src}" style="height: ${data.height}; width: ${data.width}; alignment: ${alignment}"`
}

const getStyleFromLink = (data: { url: string, targetOption?: string }): string => {
    const targetOption = data.targetOption ? data.targetOption : '_self'
    return `href="${data.url}" target="${targetOption}"`
}

export const getHtml = (src: EditorState): string => {
    return convertToHTML({
        entityToHTML: (entity, originalText) => {
            console.log(entity)
            if (entity.type === 'IMAGE') {
                const { height, width, src, alignment } = entity.data
                return {
                    start: `<img ${getStyleFromImg({ height, width, src, alignment })}>`,
                    end: '</img>',
                    empty: '',
                }
            }
            if (entity.type === 'LINK') {
                const { url, targetOption } = entity.data
                return {
                    start: `<a ${getStyleFromLink({ url, targetOption })}>`,
                    end: '</a>',
                    empty: '',
                }
            }
            return originalText
        },
    })(src.getCurrentContent())
}