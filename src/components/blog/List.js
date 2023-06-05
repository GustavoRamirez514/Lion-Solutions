
import Card from "./Card";
import SmallSetPagination from "components/pagination/SmallSetPagination";

function List({posts,get_blog_list_page,count}){
    return(
      
      <div className="overflow-hidden px-8 bg-white">
      <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-200">
        {posts&&posts.map((post,index) => (
          <Card data={post} key={index} index={index}/>
        ))}
      </ul>
      <SmallSetPagination list_page={get_blog_list_page} list={posts} count={count} />
      
    </div>
    
    )
}

export default List;