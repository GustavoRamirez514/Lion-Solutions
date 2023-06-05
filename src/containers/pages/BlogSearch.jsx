import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  search_blog,search_blog_page
} from "redux/actions/blog/blog";
import { useParams } from "react-router-dom";
import List from "components/blog/List";

function Search({ posts, count, next, previous, search_blog, search_blog_page}) {
  const params = useParams();
  const term = params.term;
  useEffect(() => {
    window.scrollTo(0, 0);
    search_blog(term);
  }, []);


  
  return (
    <Layout>
      <Helmet>
        <title>Lion Solutions | Blog</title>
      </Helmet>
      <Navbar />
      <div className="pt-28">
      <div className="mx-auto max-w-6xl my-10">
            <List
              posts={posts}
              get_blog_list_page={search_blog_page} term={term}
              count={count && count}
            />
          </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  posts: state.blog.filtered_posts,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  search_blog,
  search_blog_page
})(Search);
