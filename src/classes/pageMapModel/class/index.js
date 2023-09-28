import { PageMapModel as BaseClass } from '@yelounak/pageable-parse-classes'

export default class PageMapModel extends BaseClass {


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