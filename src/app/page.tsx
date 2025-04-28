import { Grid } from "@mui/material";
import Layout from "./components/Layout";
import SlideShow from "./components/Slideshow";

export default function Home() {
  return (
      
    <div style={{ height:'100vh', width:'100vw', justifyContent:'center', alignContent:'center'}}>
      <Layout>
        <SlideShow />
      </Layout>
    </div>
         
  );
}
