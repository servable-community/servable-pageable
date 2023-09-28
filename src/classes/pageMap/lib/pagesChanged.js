import _ from 'underscore'
import updatePages from './updatePages'

export default async ({ object }) => {
    await updatePages({ object })

    const target = (object.get('target') && object.get('target').length) ? object.get('target')[0] : null
    if (!target) {
        return
    }

    target.set('pageableItems', object.get('pages'))
    await target.save(null, { useMasterKey: true })
}
