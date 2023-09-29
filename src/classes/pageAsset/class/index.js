import { classes } from '@yelounak/pageable-classes'

export default class PageAsset extends classes.PageAsset {

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