import Link from 'next/link';
import {Card, CardImg, CardBody, CardTitle, Button, Col, CardText} from 'reactstrap'
export default function PostFeed({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
   
      <Col md="4">
    <Card>
    <CardImg
      alt="..."
      src={post.image}
      top
    />
<footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
      </footer>

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )}
    <CardBody>
      <CardTitle className="h2 mb-0">
      <a>{post.title}</a>
      </CardTitle>
      <small className="text-muted">
        by <Link href={`/${post.author.username}`}>
        <a>
          <strong>By @{post.author.username}</strong>
        </a>
      </Link>
      </small>
      <CardText className="mt-4">
        Argon is a great free UI package based on Bootstrap 4 that
        includes the most important components and features.
      </CardText>
      <Button
        className="px-0"
        color="link"
        href={`/${post.username}/${post.slug}`}
      >
        View article
      </Button>
    </CardBody>
  </Card>

    {/* <div className="card">
      <Link href={`/${post.username}`}>
        <a>
          <strong>By @{post.username}</strong>
        </a>
      </Link>

      <Link href={`/${post.username}/${post.slug}`}>
        <h2>
          <a>{post.title}</a>
        </h2>
      </Link> */}

      
    {/* </div> */}
    </Col>
   
  );
}