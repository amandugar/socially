import axios from "axios"
import { parseCookies } from "nookies"
import React from "react"
import InfoBox from "../../components/HelperComponents/InfoBox"
import baseUrl from "../../utils/baseUrl"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import PostCard from "../../components/PostCard"

function PostPageById({ post, errorLoading, user }) {
  if (errorLoading) {
    return (
      <InfoBox
        Icon={ExclamationCircleIcon}
        message={"Sorry, no post found."}
        content={"No post was found with the specified post ID."}
      />
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header user={user} />

      <main className="flex ">
        <Sidebar user={user} />
        <div className="flex-grow h-full pt-6 mr-5 xl:mr-40 ml-20 md:ml-0 md:mr-0  scrollbar-hide">
          <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <PostCard key={post._id} post={post} user={user} postById={true} />
          </div>
        </div>
      </main>
    </div>
  )
}

PostPageById.getInitialProps = async ctx => {
  try {
    const { postId } = ctx.query
    const { token } = parseCookies(ctx)
    const res = await axios.get(`${baseUrl}/api/posts/${postId}`, {
      headers: { Authorization: token },
    })

    return { post: res.data }
  } catch (error) {
    return { errorLoading: true }
  }
}

export default PostPageById
