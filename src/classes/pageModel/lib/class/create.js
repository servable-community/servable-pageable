export default async ({ metadata, data }) => {
    let {
        type,
        name,
        description } = metadata

    const item = new Servable.App.Object('PageModel')
    item.set('type', type)
    item.set('name', name)
    item.set('description', description)
    item.set('data', data)
    return item.save(null, { useMasterKey: true })
}