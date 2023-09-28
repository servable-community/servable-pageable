import { Page as BaseClass } from '@yelounak/pageable-parse-classes'

export default class Page extends BaseClass {

    /* #region searchable */
    searchableFields = () => ['name']
    searchableKeys = () => ['page']
    searchableOwnedKeys = () => ['page']
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
        'assets'
    ])
    /* #endregion */

    /* #region disposableorphansable */
    disposableOrphans = () => ([
        'searchableEntry',
        'assets'
    ])
    /* #endregion */
}