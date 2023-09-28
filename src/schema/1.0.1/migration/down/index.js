
export default async (props) => {
    console.log('Pageable 1.0.1 > down')
    const {
        protocolsExcerpt,
        configuration, } = props

    const { classes } = protocolsExcerpt['pageable']
    if (!classes) {
        console.log('Pageable 1.0.1 > down: no classes, leaving')
        return
    }

    const query = new Servable.App.Query('PageTestfor')
    await Servable.App.Utils.performBatchOnQuery({
        query,
        action: async (i) => {
            const typeA = i.get('typeA')
            const typeB = i.get('typeB')
            let type = typeA ? typeA : ''
            if (typeB !== null && typeB !== undefined) {
                type = `${type}:${typeB}`
            }

            i.set('type', type)
            await i.save(null, { useMasterKey: true })
        }
    })
}