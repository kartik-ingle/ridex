'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        const load = async () => {
            try {
                const result = await axios.get(`/api/admin/reviews/vehicle/${id}`)
                setData(result.data)
            } catch (error: any) {
                console.error(error.response.data.message ?? error)
            }
        }
        load()
    }, [id])
  return (
    <div>

    </div>
  )
}

export default page
