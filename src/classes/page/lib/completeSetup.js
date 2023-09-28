import updateModelIfNeeded from './model/updateModelIfNeeded'
import _ from 'underscore'

export default async ({ object, dirtyKeys }) => {
    await updateModelIfNeeded({ object })

    if (!dirtyKeys || !dirtyKeys.length) {
        return
    }

    const candidates = _.intersection(dirtyKeys, ['name', 'path', 'description', 'thumbnail'])
    if (!candidates.length) {
        return
    }

    let pageMap = object.get('pageMap')
    if (!pageMap) {
        return
    }

    await pageMap.updatePage({ page: object })
}