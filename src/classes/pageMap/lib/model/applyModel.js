import _ from 'underscore'

export default async ({ object }) => {
    const model = object.get('model')
    if (!model) {
        return
    }

    !model.isDataAvailable() && await model.fetch({ useMasterKey: true })

    const item = model.get('data')
    if (!item) {
        return
    }

    let customData = object.get('customData')
    if (!customData) {
        customData = {}
    }

    const pages = []
    await handleItem({ item, customData, pages })
    if (!pages.length) {
        return
    }

    object.set('customData', customData)
    object.addAllUnique('pages', pages)
    //TODO: Handle items in customData
    await object.save(null, { useMasterKey: true })
}

const handleItem = async (props) => {
    const { item, customData, pages } = props
    const { items, id, nature = "page" } = item

    if (items) {
        await Promise.all(items.map(async i => await handleItem({
            ...props,
            item: i,
        })))
    }

    if (!id ||
        nature !== 'page') {
        return
    }

    let entry = customData[id]
    if (entry &&
        (Array.isArray(entry) || entry.nature !== 'page')) {
        return
    }

    if (!entry) {
        entry = {
            params: {
                page: {}
            }
        }
    }
    // if (!entry ||
    //     Array.isArray(entry)
    //     || _.isEmpty(entry)
    //     || !entry.type
    //     || entry.nature !== 'page') {
    //     return
    // }

    const { page } = entry
    if (page && page.id) {
        return
    }

    const _page = new Servable.App.Object('Page')
    _page.set('modelType', item.type)

    await _page.save(null, {
        useMasterKey: true,
        cascadeSave: false
    })

    pages.push(_page)
    entry.params = {
        // ...(entry.params ? entry.params : {}),
        page: {
            id: _page.id
        }
    }

    customData[id] = { ...entry }
}