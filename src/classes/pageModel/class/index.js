import { classes } from '@yelounak/pageable-classes'

export default class PageModel extends classes.PageModel {

    /* #region searchable */
    searchableFields = () => ['name']
    searchableKeys = () => ['pagemodel']
    searchableOwnedKeys = () => ['pagemodel']
    searchableLocales = () => ['en']
    /* #endregion  */


    /* #region versionable */
    versionableModes = () => ['auto',]
    versionableDirtyKeysForAutoMode = () => ['name']
    //versionableDirtyKeysForAutoMode = () => ['*']
    /* #endregion  */



    /* #region printable */
    printableDirtyKeys = () => ['name']
    printableGenerateValue = () => {
        return `${this.get('name')}`
    }
    /* #endregion  */


    /* #region taggable */
    taggableFieldsToTagAutomatically = () => ['name']
    /* #endregion  */



    /* #region disposablechildrenable */
    disposableChildren = () => ([
        'searchableEntry',
    ])
    /* #endregion */

    /* #region disposableorphansable */
    disposableOrphans = () => ([
        'searchableEntry',
    ])
    /* #endregion */
}