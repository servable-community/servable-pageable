import get from './get'
import create from './create'

export default async (props) => {

    const item = await get(props)
    if (item) {
        return item
    }
    return create(props)
}