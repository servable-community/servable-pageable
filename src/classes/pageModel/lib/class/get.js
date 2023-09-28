export default async ({ metadata }) => {
    let { type } = metadata
    const query = new Servable.App.Query('PageModel')
    query.equalTo('type', type)
    return query.first({ useMasterKey: true })
}