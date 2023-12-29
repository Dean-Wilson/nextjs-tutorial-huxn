"use client"

const User = (params) => {
    console.log(params)
  return (
    <div>This is User Page for {params.user}</div>
  )
}

export default User