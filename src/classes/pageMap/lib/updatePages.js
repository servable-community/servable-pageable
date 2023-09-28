import _ from 'underscore'

export default async ({ object }) => {
    const pages = object.get('pages')
    if (!pages || !pages.length) {
        return
    }

    const target = object.get('target')
    await Promise.all(pages.map(page => handleItem({ page, object, target })))
}

const handleItem = async ({ object, page, target }) => {
    let changed = false

    if (target && !page.get('target')) {
        page.set('target', target)
        changed = true
    }

    if (!page.get('pageMap') || page.get('pageMap').id !== object.id) {
        page.set('pageMap', object)
        changed = true
    }

    if (!changed) {
        return
    }

    await page.save(null, { useMasterKey: true })
    // target.set('pageableItems', object.get('pages'))
    // await target.save(null, { useMasterKey: true })
}