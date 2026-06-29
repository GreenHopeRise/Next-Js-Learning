type Props = {
    params:Promise<{
        userId: string;
        postId: string
    }>
}

export default async function UserPost({params}:Props) {
    const {userId, postId} = await params
    return(
        <>
         <h1>User ID: {userId}</h1>
      <h2>Post ID: {postId}</h2>
        </>
    )
    
}