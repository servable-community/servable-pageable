export default async ({ object, type }) => {
    let _type = type ? type : (object ? object.className : null)
    if (!_type) {
        return null
    }
    const query = new Servable.App.Query('PageMap')
    query.equalTo('type', _type)
    return query.first({ useMasterKey: true })
}