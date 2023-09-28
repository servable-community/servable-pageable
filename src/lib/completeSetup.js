import setupMap from "./map/setup"
import _ from 'underscore'
import handlePageableItem from './handlePageableItem'

export default async ({ object }) => {
    let pageableItems = object.get('pageableItems')
    if (pageableItems) {
        await Promise.all(pageableItems.map(item => handlePageableItem({ item, object })))
    }

    let changed = await setupMap({ object })
    if (changed) {
        await object.save(null, { useMasterKey: true })
    }
}