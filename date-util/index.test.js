import { deepStrictEqual } from 'assert'

import { DateUtil } from './index.js'

;

{
    const format = 'dd-M-Y'
    const date = new Date(1990, 2, 1)
    
    const expected = { error: 'Format unavailable'}

    const result = DateUtil.formatDate(date, format)

    deepStrictEqual(result, expected)
}

{
    const format = 'dd-mm-yyyy'
    const date = new Date('1990-12-01')
    
    const expected = '01-12-1990'

    const result = DateUtil.formatDate(date, format)

    deepStrictEqual(result, expected)
}

{
    const format = 'dd/mm/yyyy'
    const date = new Date('1992-10-13')
    
    const expected = '13/10/1992'

    const result = DateUtil.formatDate(date, format)

    deepStrictEqual(result, expected)
}

{
    const format = 'yyyy-mm-dd'
    const date = new Date('1995-06-30')

    const expected = '1995-06-30'

    const result = DateUtil.formatDate(date, format)

    deepStrictEqual(result, expected)
}

{
    const date = ''

    const expected = { error: 'No date found'}

    const result = DateUtil.formatString(date)

    deepStrictEqual(result, expected)
}

{
    const date = '1994-july-20'
    const currentFormat = 'yyyy-M-dd'
    
    const expected = { error: 'The date current format is not supported' }

    const result = DateUtil.formatString(date, currentFormat)

    deepStrictEqual(result, expected)
}

{
    const date = '1994-07-20'
    const currentFormat = 'yyyy-mm-dd'
    const targetFormat = 'yyyy-M-dd'

    const expected = { error: 'The date target format is not available' }

    const result = DateUtil.formatString(date, currentFormat, targetFormat)

    deepStrictEqual(result, expected)
}

{
    const date = '1994-07-20'
    const currentFormat = 'yyyy-mm-dd'
    const targetFormat = 'dd/mm/yyyy'

    const expected = '20/07/1994'

    const result = DateUtil.formatString(date, currentFormat, targetFormat)

    deepStrictEqual(result, expected)
}

{
    const date = '1 9 9 4 - 0 7 - 2 0 '
    const currentFormat = 'yyyy-mm-dd'
    const targetFormat = 'dd-mm-yyyy'

    const expected = '20-07-1994'

    const result = DateUtil.formatString(date, currentFormat, targetFormat)

    deepStrictEqual(result, expected)
}

{
    const date = '20/09/2000'
    const currentFormat = 'dd/mm/yyyy'
    const targetFormat = 'yyyy-mm-dd'

    const expected = '2000-09-20'

    const result = DateUtil.formatString(date, currentFormat, targetFormat)

    deepStrictEqual(result, expected)
}