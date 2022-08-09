import { StringUtil } from '@bit-sahti/string-util'

const availableFormats = {
    'dd-mm-yyyy': '$<day>-$<month>-$<year>',
    'dd/mm/yyyy': '$<day>/$<month>/$<year>',
    'yyyy-mm-dd': '$<year>-$<month>-$<day>'
}

const yymmdd = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g
const ddmmyy = /(?<day>\d{2}).(?<month>\d{2}).(?<year>\d{4})/g

const stringToDateRegex = {
    'dd-mm-yyyy': ddmmyy,
    'dd/mm/yyyy': ddmmyy,
    'yyyy-mm-dd': yymmdd
}

export class DateUtil {
    static formatDate(date, format) {
        const targetFormat = availableFormats[format]
        if (!targetFormat) {
            return {
                error: 'Format unavailable'
            }
        }

        const [result] =  date.toISOString().match(yymmdd)

        return result.replace(yymmdd, targetFormat)
    }

    static formatString(stringDate, inputFornat, outputFormat) {
        const currentFormat = stringToDateRegex[inputFornat]
        const targetFormat = availableFormats[outputFormat]

        if (StringUtil.isEmpty(stringDate)) {
            return {
                error: 'No date found'
            }
        }

        if (!currentFormat) {
            return {
                error: 'The date current format is not supported'
            }
        }

        if (!targetFormat) {
            return {
                error: 'The date target format is not available'
            }
        }

        return StringUtil
                .removeEmptySpace(stringDate)
                .replace(currentFormat, targetFormat)
    }
}