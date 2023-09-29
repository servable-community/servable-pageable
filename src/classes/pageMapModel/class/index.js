import { classes } from '@yelounak/pageable-classes'

export default class PageMapModel extends classes.PageMapModel {


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