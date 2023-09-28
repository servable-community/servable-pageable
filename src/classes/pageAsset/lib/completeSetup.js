import _ from 'underscore'

export default async ({ object, dirtyKeys }) => {

    if (!dirtyKeys || !dirtyKeys.length) {
        return
    }

    const candidates = _.intersection(dirtyKeys, ['file'])
    if (!candidates.length) {
        return
    }
    const type = object.get('type')
    switch (type) {
        case 'video':
            { return }
        default: break
    }

    const file = object.get('file')
    if (!file) {
        object.set('assetId', null)
        await object.save(null, { useMasterKey: true })
        return
    }

    const assetId = file.url()
    object.set('assetId', assetId)
    await object.save(null, { useMasterKey: true })
}