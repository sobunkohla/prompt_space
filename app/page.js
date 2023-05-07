// Static metadata 

// export const metadata = {
//   title : 'Home',
// };

//* */
//Dynamic metadata


export async function  generateMetadata({params, searchParams}) {
  const product = await getProduct(params.id)
  return {title : product.title}
}

//* */

export default function Page() {
  return (
    <h1> My Normal Next.js Page with static Metadata</h1>
  )
}
