export default async ({ object, type, data }) => {
    let _type = type ? type : (object ? object.className : null)
    if (!_type) {
        return null
    }

    const item = new Servable.App.Object('PageMapModel')
    item.set('type', _type)
    item.set('data', data)
    return item.save(null, { useMasterKey: true })
}