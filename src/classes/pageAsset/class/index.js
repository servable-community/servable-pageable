import { PageAsset as BaseClass } from '@yelounak/pageable-parse-classes'

export default class PageAsset extends BaseClass {

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
}