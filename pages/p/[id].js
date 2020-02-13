import Layout from "../../components/Layout"
import axios from "axios";

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async (context)=> {
    const { id } = context.query;
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return { show: res.data };
  };

export default Post;