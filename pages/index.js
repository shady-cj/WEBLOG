import HomePage from "../components/Home/homePage";
import React from "react";
import Wrapper from "../components/Container/HOC";

function Home() {
    return <HomePage />;
}

const HomeWrapper = Wrapper(Home);
export default HomeWrapper;

// export async function getServerSideProps(context) {
//     console.log(context.store);
//     return {
//         props: {},
//     };
// }
