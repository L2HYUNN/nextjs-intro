import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
