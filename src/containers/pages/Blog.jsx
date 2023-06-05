import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import Header from "components/blog/Header";
import List from "components/blog/List";

function Blog({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_blog_list();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Lion Solutions | Blog</title>
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <Header categories={categories && categories} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl my-10">
            <List
              posts={posts}
              get_blog_list_page={get_blog_list_page}
              count={count && count}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(Blog);
