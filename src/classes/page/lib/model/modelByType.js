export default async ({ type }) => {
    const query = new Servable.App.Query('PageModel')
    query.equalTo('type', type)
    return query.first({ useMasterKey: true })
}