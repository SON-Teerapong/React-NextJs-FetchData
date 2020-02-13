import "../css/style.css"
import Header from "./Header";
import Footer from "./Footer";
const Layout = props => {
  return (
    <div>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>>
      </head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
