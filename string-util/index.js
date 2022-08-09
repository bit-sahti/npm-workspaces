export class StringUtil {
    static removeEmptySpace(string) {
        return string.replace(/\s/ig, '')
    }

    static isEmpty(string) {
        return string.length === 0
    }
}