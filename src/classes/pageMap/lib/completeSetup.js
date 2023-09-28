import updateModelIfNeeded from './model/updateModelIfNeeded'
import applyModel from './model/applyModel'
import _ from 'underscore'
import customDataChanged from './customDataChanged'
import pagesChanged from './pagesChanged'

export default async (props) => {
    const { object, dirtyKeys = [] } = props

    await updateModelIfNeeded({ object })

    await applyModel({ object, dirtyKeys })

    if (_.intersection(dirtyKeys, ['target']).length) {
        await customDataChanged(props)
        await pagesChanged(props)
    }

    else {
        if (_.intersection(dirtyKeys, ['customData']).length) {
            await customDataChanged(props)
        }

        if (_.intersection(dirtyKeys, ['pages']).length) {
            await pagesChanged(props)
        }
    }
}