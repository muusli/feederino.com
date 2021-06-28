import Link from 'next/link';
import {Card, CardImg,CardHeader, Row, CardBody,UncontrolledTooltip, CardTitle, Button, Col, CardText} from 'reactstrap'
export default function PostFeed({ posts, admin, postRef }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);
  // const postRef = 
  return (
   
      <Col md="4" justify-self="center">
     <Card>
             
              
              <CardBody>
              {/* <Link href={`/${post.author.username}/${post.slug}`}> */}
              <h5 className="h3 mb-0">{post.title}</h5>
                <p className="mb-4">
                  {post.description}
                </p> 
                <Link href={`/${post.username}/${post.slug}`}>
                <img
                
                  alt="..."
                  className="img-fluid rounded"
                  src={post.image}
                />
                </Link>
            
                <Row className="align-items-center my-3 pb-3 border-bottom">
                  <Col sm="6">
                    <div className="icon-actions">
                      <a
                        className="like active"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="far fa-heart text-danger" />
                        <span className="text-muted">{post.heartCount || 0}</span>
                      </a> 
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="ni ni-chat-round" />
                        <span className="text-muted">36</span>
                      </a>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="ni ni-curved-next" />
                        <span className="text-muted">12</span>
                      </a>
                    </div>
                  </Col>
                  <Col className="d-none d-sm-block" sm="6">
                     <div className="d-flex align-items-center justify-content-sm-end">
                     
                     <small className="text-muted">
        by <Link href={`/${post.username}`}>
        <a>
          <strong>@{post.username}</strong>
        </a>
      </Link>
      </small>
                     
                     {/* <div className="avatar-group">
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip36177092"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip36177092">
                          Jessica Rowland
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip857639221"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip857639221"
                        >
                          Audrey Love
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip260223080"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip260223080"
                        >
                          Michael Lewis
                        </UncontrolledTooltip>
                      </div>
                      <small className="pl-2 font-weight-bold">
                        and 30+ more
                      </small>*/}
                    </div> 
                  </Col>
                </Row>
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