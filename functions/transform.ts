export function transform(data: any) {
  const [ portfolio, blog ] = data;
  
  const portfolioes = portfolio.portfolioList;
  const blogs = blog.blogList;
  
  return { portfolioes, blogs }
  
}