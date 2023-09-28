import { PageMap as BaseClass } from '@yelounak/pageable-parse-classes'

export default class PageMap extends BaseClass {

    /* #region disposablechildrenable */
    disposableChildren = () => ([
        'file',
    ])
    /* #endregion */

    /* #region disposableorphansable */
    disposableOrphans = () => ([
        'file',
    ])
    /* #endregion */

    updatePage = async ({ page }) => {

        // const path = page.get('path')
        // const name = page.get('name')
        // const description = page.get('description')
        // const thumbnailUrl = page.get('thumbnail') ? page.get('thumbnail').url : null

        // !this.isDataAvailable() && await this.fetch({ useMasterKey: true })

        // const map = this.get('pageableMap')
        // if (!map) {
        //     return
        // }

        // //#TODO: recursively find item and update
        // let item = map[path]
        // if (!item) {
        //     return
        // }

        // item = {
        //     ...item,
        //     name,
        //     path,
        //     description,
        //     thumbnailUrl
        // }

        // map[path] = item
        // target.set('pageableMap', map)

        // await target.save(null, { useMasterKey: true })
    }
}