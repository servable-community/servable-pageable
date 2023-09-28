export default async ({ object }) => {
    let pageableMap = object.get('pageableMap')
    if (pageableMap) {
        if (object.dirty()) {
            return false
        }

        !pageableMap.isDataAvailable() && await pageableMap.fetch({ useMasterKey: true })
        if (!pageableMap.get('target') || !pageableMap.get('target').length) {
            pageableMap.addUnique('target', object)
            await pageableMap.save(null, { useMasterKey: true })
        }
        return false
    }

    if (object.pageableMapModel) {
        await object.pageableCreatePageModels()
    }

    const model = object.pageableMapModel ?
        await object.pageableMapModel() :
        null

    if (!model) {
        return false
    }

    pageableMap = new Servable.App.Object('PageMap')
    pageableMap.set('model', model)
    pageableMap.set('modelType', model.get('type'))
    await pageableMap.save(null, { useMasterKey: true })

    object.set('pageableMap', pageableMap)

    return true
}