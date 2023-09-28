export default async ({ object }) => {
    const assetClassName = object.get('assetClassName')
    const assetId = object.get('assetId')
    if (!assetClassName || !assetId) {
        return
    }

    const query = new Servable.App.Query(assetClassName)
    query.equalTo('objectId', assetId)
    const item = await query.first({ useMasterKey: true })
    if (!item) {
        return
    }

    await item.destroy({ useMasterKey: true })
}