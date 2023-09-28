import _ from 'underscore'

export default async ({ object }) => {

    const data = object.getData()
    object.set('generatedData', data)
    await object.save(null, { useMasterKey: true })

    const target = (object.get('target') && object.get('target').length) ? object.get('target')[0] : null
    if (!target) {
        return
    }

    target.set('pageableMapGeneratedData', data)
    await target.save(null, { useMasterKey: true })
}