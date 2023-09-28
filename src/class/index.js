
export default ({ ParentClass }) => {
    return class TargetClass extends ParentClass {
        disposableOrphans() {
            const items = super.disposableOrphans ? super.disposableOrphans() : []
            return [
                ...items,
                'pageableMap'
            ]
        }

        /* #region disposablechildrenable */
        disposableChildren() {
            const items = super.disposableChildren ? super.disposableChildren() : []
            return [
                ...items,
                'pageableMap'
            ]
        }
        /* #endregion */
    }
}