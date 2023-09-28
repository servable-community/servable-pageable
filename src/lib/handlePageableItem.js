import _ from 'underscore'

export default async ({ item, object }) => {
    !item.isDataAvailable() && await item.fetch({ useMasterKey: true })
    // const targets = item.get('target')
    // if (!_.isNull(targets)
    //     || !_.isUndefined(targets)
    //     || targets.length) {
    //     return
    // }

    // if (targets.length) {
    //     return
    // }
    //#TODO
    item.addUnique('target', object)
    await item.save(null, { useMasterKey: true })
}