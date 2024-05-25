import React from 'react'

interface Props {
    params: { id: number; photoId: number }
}
const IndividualPhoto = ({ params: { id, photoId } }: Props) => {
    return (
        <div>IndividualPhoto {id} {photoId}</div>
    )
}
export default IndividualPhoto