
import setup from '../lib/setup'
import tearDown from '../lib/tearDown'
import completeSetup from '../lib/completeSetup'

export const beforeSave = async ({ request }) => {
    const { object, } = request
    await setup({ object })
}

export const afterSave = async ({ request }) => {
    const { object, context } = request
    const dirtyKeys = context.dirtyKeys
    await completeSetup({ object, dirtyKeys })
}

export const afterDelete = async ({ request }) => {
    const { object } = request
    await tearDown({ object })
}