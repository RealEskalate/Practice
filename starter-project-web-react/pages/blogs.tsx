
const Bloglist = () => {
    const blogs = [
              {
                "title": "My First Blog",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "mario",
                "id": 1
              },
              {
                "title": "Opening Party!",
                
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              },
              {
                "title": "Grand kalab",
                "body": "is a truly amazing master of all",
                "author": "Kalab",
                "id": 12
              },
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              },      
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              }, 
        ]
    return (  
        <div className="blog-list">
            <h2>Blogs </h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>        
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h1>{blog.author}</h1>   
            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;