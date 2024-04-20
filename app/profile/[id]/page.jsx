import React from 'react'
import { authSession } from '@app/api/auth/[...nextauth]/route'

const userId = authSession.user.id;
const page = () => {
    return (
        <div>{userId}</div>
    )
}

export default page