export default async ({ type }) => {
    const query = new Servable.App.Query('PageMapModel')
    query.equalTo('type', type)
    return query.first({ useMasterKey: true })
}