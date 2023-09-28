
export default async (props) => {
    console.log('Pageable 0.1.2 > up')
    const {
        protocolsExcerpt,
        configuration, } = props

    const { classes } = protocolsExcerpt['pageable']
    if (!classes) {
        console.log('Pageable 0.1.2 > up: no classes, leaving')
        return
    }

    const query = new Servable.App.Query('PageTestfor')
    await Servable.App.Utils.performBatchOnQuery({
        query,
        action: async (i) => {
            const type = i.get('type')
            if (!type) {
                return
            }
            const items = type.split(':')
            if (!items || !items.length) {
                return
            }
            if (items.length === 0) {
                i.set('typeA', items[0])
            }
            else if (items.length === 2) {
                i.set('typeA', items[0])
                try {
                    i.set('typeB', parseFloat(items[1]))
                } catch (e) {
                    console.error(e)
                }
            }

            await i.save(null, { useMasterKey: true })
        }
    })
}