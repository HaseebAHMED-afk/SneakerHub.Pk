
import { useRouter } from 'next/router'

const index = () => {

    const router = useRouter()

    const { id } = router.query

    return (
        <div>
            {id}
        </div>
    )
}

export default index