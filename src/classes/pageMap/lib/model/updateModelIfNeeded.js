import modelByType from './modelByType'

export default async ({ object }) => {
    if (!object || object.get('model')) {
        return
    }

    const type = object.get('modelType')
    if (!type) {
        return
    }

    const model = await modelByType({ type })
    if (!model) {
        return
    }

    object.set('model', model)
    await object.save(null, {
        useMasterKey: true,
        cascadeSave: false
    })

    model.relation('instances').add(object)
    await model.save(null, { useMasterKey: true })
}